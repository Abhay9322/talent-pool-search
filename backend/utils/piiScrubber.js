export const scrubPII = (text) => {
    return text
        .replace(
            /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,
            "[EMAIL]"
        )
        .replace(
            /(\+?\d{1,3}[- ]?)?\d{10}/g,
            "[PHONE]"
        )
        .replace(
            /https?:\/\/(www\.)?linkedin\.com\/[^\s]+/gi,
            "[LINKEDIN]"
        )
        .replace(
            /https?:\/\/(www\.)?github\.com\/[^\s]+/gi,
            "[GITHUB]"
        );
};