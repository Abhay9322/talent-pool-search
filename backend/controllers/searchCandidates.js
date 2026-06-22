import supabase from "../config/supabase.js";

export const searchCandidates = async (req, res, next) => {
    try {
        let {
            query,
            skill,
            minExp,
            location,
            page = 1,
            limit = 50
        } = req.query;

        page = parseInt(page);
        limit = parseInt(limit);

        let dbQuery = supabase.from("candidates").select("*");

        /**
         * GLOBAL SEARCH (name, job title, summary)
         */
        if (query) {
            dbQuery = dbQuery.or(
                `name.ilike.%${query}%,current_job_title.ilike.%${query}%,summary.ilike.%${query}%`
            );
        }

        /**
         * SKILL FILTER (JSONB contains)
         */
        if (skill) {
            dbQuery = dbQuery.contains("skills", [skill]);
        }

        /**
         * LOCATION FILTER
         */
        if (location) {
            dbQuery = dbQuery.ilike("location", `%${location}%`);
        }

        /**
         * EXPERIENCE FILTER
         */
        if (minExp) {
            dbQuery = dbQuery.gte("years_experience", minExp);
        }

        // PAGINATION
        const from = (page - 1) * limit;
        const to = from + limit - 1;

        const { data, error } = await dbQuery.range(from, to);

        if (error) throw error;

        res.json({
            success: true,
            page,
            limit,
            count: data.length,
            data
        });
    } catch (err) {
        next(err);
    }
};