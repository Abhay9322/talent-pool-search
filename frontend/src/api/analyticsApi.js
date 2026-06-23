import axios from "axios";
import { API_URL } from "./config";

const ANALYTICS_URL = `${API_URL}/analytics`;

export const getTopSkills = async () => {
    const response = await axios.get(
        `${ANALYTICS_URL}/skills`
    );

    return response.data;
};

export const getLocationStats = async () => {
    const response = await axios.get(
        `${ANALYTICS_URL}/locations`
    );

    return response.data;
};

export const getExperienceStats = async () => {
    const response = await axios.get(
        `${ANALYTICS_URL}/experience`
    );

    return response.data;
};