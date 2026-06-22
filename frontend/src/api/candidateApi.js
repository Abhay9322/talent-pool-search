import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
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

// export const getCandidateById = async (id) => {
//     try {
//         const response = await API.get(`/candidates/${id}`);

//         return response.data;
//     } catch (error) {
//         console.error(error);

//         throw (
//             error.response?.data?.message ||
//             "Failed to fetch candidate"
//         );
//     }
// };

// import axios from "axios";

export const getCandidateById = async (id) => {
    const response = await axios.get(
        `http://localhost:5000/api/candidates/${id}`
    );

    return response.data.data;
};

export default API;