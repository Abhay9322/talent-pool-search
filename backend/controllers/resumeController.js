import { parseResume } from "../services/resumeParserService.js";
import { extractContacts } from "../utils/contactExtractor.js";
import { scrubPII } from "../utils/piiScrubber.js";
import { uploadToS3 } from "../services/s3Service.js";
import { analyzeResume } from "../services/geminiService.js";
import supabase from "../config/supabase.js";

export const uploadResume = async (req, res, next) => {
    console.log("Inside Resume Upload");

    try {
        const files = req.files;

        if (!files || files.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No files uploaded"
            });
        }

        const results = await Promise.all(
            files.map(async (file) => {
                try {
                    console.log(`Processing: ${file.originalname}`);

                    // -------------------------------
                    // Parse Resume
                    // -------------------------------
                    console.time(`Parse-${file.originalname}`);

                    const rawText = await parseResume(file);

                    console.timeEnd(`Parse-${file.originalname}`);

                    // -------------------------------
                    // Extract Contact Information
                    // -------------------------------
                    const contacts = extractContacts(rawText);

                    // -------------------------------
                    // Remove PII
                    // -------------------------------
                    const cleanText = scrubPII(rawText)
                        .substring(0, 15000); // limit text for Gemini

                    // -------------------------------
                    // Upload + AI Analysis Parallel
                    // -------------------------------
                    console.time(`AI+S3-${file.originalname}`);

                    const [resumeUrl, aiData] =
                        await Promise.all([
                            uploadToS3(file),
                            analyzeResume(cleanText)
                        ]);

                    console.timeEnd(`AI+S3-${file.originalname}`);

                    // -------------------------------
                    // Save to Database
                    // -------------------------------
                    console.time(`DB-${file.originalname}`);

                    const { data, error } = await supabase
                        .from("candidates")
                        .insert([
                            {
                                name: aiData?.name || "",
                                email: contacts.email || "",
                                phone: contacts.phone || "",
                                linkedin: contacts.linkedin || "",
                                github: contacts.github || "",
                                skills: aiData?.skills || [],
                                years_experience:
                                    aiData?.yearsOfExperience || 0,
                                current_job_title:
                                    aiData?.currentJobTitle || "",
                                location:
                                    aiData?.location || "",
                                summary:
                                    aiData?.summary || "",
                                education:
                                    aiData?.education || [],
                                work_history:
                                    aiData?.workHistory || [],
                                resume_url: resumeUrl
                            }
                        ])
                        .select();

                    console.timeEnd(`DB-${file.originalname}`);

                    if (error) {
                        throw error;
                    }

                    return {
                        success: true,
                        fileName: file.originalname,
                        data
                    };
                } catch (err) {
                    console.error(
                        `Error processing ${file.originalname}:`,
                        err.message
                    );

                    return {
                        success: false,
                        fileName: file.originalname,
                        error: err.message
                    };
                }
            })
        );

        return res.status(200).json({
            success: true,
            message: "Resume processing completed",
            totalFiles: files.length,
            results
        });

    } catch (err) {
        console.error("Upload Error:", err);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};