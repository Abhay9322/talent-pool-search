import axios from "axios";

const API_URL = "http://localhost:5000/api/analytics";

export const getTopSkills = async () => {
    const response = await axios.get(
        `${API_URL}/skills`
    );

    return response.data;
};

export const getLocationStats = async () => {
    const response = await axios.get(
        `${API_URL}/locations`
    );

    return response.data;
};

export const getExperienceStats = async () => {
    const response = await axios.get(
        `${API_URL}/experience`
    );

    return response.data;
};