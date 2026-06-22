import pdf from "pdf-parse";
import mammoth from "mammoth";

export const parseResume = async (
    file
) => {
    const mime = file.mimetype;

    if (mime === "application/pdf") {
        const data = await pdf(file.buffer);
        return data.text;
    }

    if (
        mime ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
        const result = await mammoth.extractRawText({
            buffer: file.buffer
        });
        return result.value;
    }

    if (mime === "text/plain") {
        return file.buffer.toString("utf-8");
    }

    throw new Error("Unsupported file type");
};