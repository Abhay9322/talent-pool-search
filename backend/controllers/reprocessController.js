import supabase from "../config/supabase.js";
import { analyzeResume } from "../services/geminiService.js";

export const reprocessCandidate = async (req, res, next) => {
    try {
        const { id } = req.params;

        const { data } = await supabase
            .from("candidates")
            .select("*")
            .eq("id", id)
            .single();

        const aiData = await analyzeResume(
            data.summary || ""
        );

        await supabase
            .from("candidates")
            .update({
                skills: aiData.skills,
                summary: aiData.summary
            })
            .eq("id", id);

        res.json({
            success: true,
            message: "Reprocessed successfully"
        });
    } catch (err) {
        next(err);
    }
};