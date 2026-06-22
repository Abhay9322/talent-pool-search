export const extractContacts = (text) => {
    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;

    const phoneRegex =
        /(\+?\d{1,3}[- ]?)?\d{10}/g;

    const linkedinRegex =
        /https?:\/\/(www\.)?linkedin\.com\/[^\s]+/gi;

    const githubRegex =
        /https?:\/\/(www\.)?github\.com\/[^\s]+/gi;

    const emails = text.match(emailRegex) || [];
    const phones = text.match(phoneRegex) || [];
    const linkedin = text.match(linkedinRegex) || [];
    const github = text.match(githubRegex) || [];

    return {
        email: emails[0] || "",
        phone: phones[0] || "",
        linkedin: linkedin[0] || "",
        github: github[0] || ""
    };
};