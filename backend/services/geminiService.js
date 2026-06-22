import model from "../config/gemini.js";

export const analyzeResume = async (
    text
) => {
    const prompt = `
You are an expert HR AI system.

Extract structured JSON ONLY from this resume.

Return format:

{
  "skills": [],
  "yearsOfExperience": number,
  "currentJobTitle": "",
  "location": "",
  "summary": "",
  "education": [],
  "workHistory": []
}

Rules:
- Return ONLY valid JSON
- No markdown
- No explanation

Resume:
${text}
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;
    const textOutput = response.text();

    return JSON.parse(textOutput);
};