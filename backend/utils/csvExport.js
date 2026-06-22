import { Parser } from "json2csv";

export const generateCSV = (data) => {
    const fields = [
        "name",
        "email",
        "phone",
        "current_job_title",
        "location",
        "years_experience"
    ];

    const parser = new Parser({ fields });

    return parser.parse(data);
};