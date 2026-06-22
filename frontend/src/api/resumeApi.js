import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const uploadResumes = async (files) => {
    try {
        const formData = new FormData();

        files.forEach((file) => {
            formData.append("files", file);
        });

        const response = await API.post(
            "/resumes/upload",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data?.message ||
            "Failed to upload resumes"
        );
    }
};

export default API;