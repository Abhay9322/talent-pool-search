import supabase from "../config/supabase.js";

export const bulkDelete = async (req, res, next) => {
    try {
        const { ids } = req.body;

        const { error } = await supabase
            .from("candidates")
            .delete()
            .in("id", ids);

        if (error) throw error;

        res.json({
            success: true,
            message: "Bulk delete successful"
        });
    } catch (err) {
        next(err);
    }
};