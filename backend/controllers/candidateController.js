import supabase from "../config/supabase.js";

/**
 * GET ALL CANDIDATES (with pagination + sorting)
 */
export const getCandidates = async (req, res, next) => {
    try {
        let {
            page = 1,
            limit = 50,
            sort = "newest",
            skill,
            experience,
            location,
        } = req.query;

        page = parseInt(page);
        limit = parseInt(limit);

        let query = supabase
            .from("candidates")
            .select("*");

        // Sorting
        if (sort === "newest") {
            query = query.order("created_at", {
                ascending: false,
            });
        }

        if (sort === "oldest") {
            query = query.order("created_at", {
                ascending: true,
            });
        }

        if (sort === "experience") {
            query = query.order(
                "years_experience",
                {
                    ascending: false,
                }
            );
        }

        const { data, error } =
            await query;

        if (error) throw error;

        let filtered = data;

        // Skill Filter
        if (skill) {
            filtered = filtered.filter(
                (candidate) => {
                    if (
                        !candidate.skills
                    )
                        return false;

                    // skills array case
                    if (
                        Array.isArray(
                            candidate.skills
                        )
                    ) {
                        return candidate.skills.some(
                            (s) =>
                                s
                                    .toLowerCase()
                                    .includes(
                                        skill.toLowerCase()
                                    )
                        );
                    }

                    // skills string case
                    return candidate.skills
                        .toLowerCase()
                        .includes(
                            skill.toLowerCase()
                        );
                }
            );
        }

        // Experience Filter
        if (experience) {
            filtered =
                filtered.filter(
                    (candidate) =>
                        Number(
                            candidate.years_experience
                        ) >=
                        Number(experience)
                );
        }

        // Location Filter
        if (location) {
            filtered =
                filtered.filter(
                    (candidate) =>
                        candidate.location
                            ?.toLowerCase()
                            .includes(
                                location.toLowerCase()
                            )
                );
        }

        // Pagination
        const from =
            (page - 1) * limit;

        const to = from + limit;

        const paginatedData =
            filtered.slice(from, to);

        res.json({
            success: true,
            page,
            limit,
            total:
                filtered.length,
            data: paginatedData,
        });
    } catch (err) {
        next(err);
    }
};
export const getCandidateById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from("candidates")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;

        res.json({
            success: true,
            data
        });
    } catch (err) {
        next(err);
    }
};

export const deleteCandidate = async (req, res, next) => {
    try {
        const { id } = req.params;

        const { error } = await supabase
            .from("candidates")
            .delete()
            .eq("id", id);

        if (error) throw error;

        res.json({
            success: true,
            message: "Candidate deleted"
        });
    } catch (err) {
        next(err);
    }
};