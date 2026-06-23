import axios from "axios";
import { API_URL } from "../config";

const API = axios.create({
    baseURL: API_URL,
});

export const getCandidates = async (filters = {}) => {
    try {
        const response = await API.get("/candidates", {
            params: filters,
        });

        return response.data;
    } catch (error) {
        console.error(error);

        throw (
            error.response?.data?.message ||
            "Failed to fetch candidates"
        );
    }
};

export const getCandidateById = async (id) => {
    const response = await axios.get(
        `${API_URL}/candidates/${id}`
    );

    return response.data.data;
};

export default API;