import supabase from "../config/supabase.js";

/**
 * TOP SKILLS ANALYTICS
 */
export const getTopSkills = async (req, res, next) => {
    try {
        const { data } = await supabase
            .from("candidates")
            .select("skills");

        const skillCount = {};

        data.forEach((c) => {
            (c.skills || []).forEach((s) => {
                skillCount[s] = (skillCount[s] || 0) + 1;
            });
        });

        const result = Object.entries(skillCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);

        res.json({ success: true, data: result });
    } catch (err) {
        next(err);
    }
};

export const getLocationStats = async (req, res, next) => {
    try {
        const { data } = await supabase
            .from("candidates")
            .select("location");

        const map = {};

        data.forEach((c) => {
            if (!c.location) return;
            map[c.location] = (map[c.location] || 0) + 1;
        });

        res.json({
            success: true,
            data: Object.entries(map)
        });
    } catch (err) {
        next(err);
    }
};

export const getExperienceStats = async (req, res, next) => {
    try {
        const { data } = await supabase
            .from("candidates")
            .select("years_experience");

        const buckets = {
            "0-1": 0,
            "1-3": 0,
            "3-5": 0,
            "5+": 0
        };

        data.forEach((c) => {
            const y = c.years_experience || 0;

            if (y <= 1) buckets["0-1"]++;
            else if (y <= 3) buckets["1-3"]++;
            else if (y <= 5) buckets["3-5"]++;
            else buckets["5+"]++;
        });

        res.json({ success: true, data: buckets });
    } catch (err) {
        next(err);
    }
};