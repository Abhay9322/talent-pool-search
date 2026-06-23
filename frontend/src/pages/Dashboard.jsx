import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import CandidateFilters from "../components/CandidateFilters";
import CandidateCard from "../components/CandidateCard";
import EmptyState from "../components/EmptyState";
import { API_URL } from "../api/config";

function Dashboard() {
    const navigate = useNavigate();

    const [candidates, setCandidates] = useState([]);

    const [filters, setFilters] = useState({
        skill: "",
        experience: "",
        location: "",
    });

    useEffect(() => {
        fetchCandidates();
    }, []);

    const fetchCandidates = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/candidates`);

            console.log("API RESPONSE:", data);
            console.log("CANDIDATES:", data.data);

            setCandidates(
                Array.isArray(data.data)
                    ? data.data
                    : [data.data]
            );
        } catch (error) {
            console.log(error);
        }
    };

    const applyFilters = async () => {
        try {
            const params = {};

            if (filters.skill) {
                params.skill = filters.skill;
            }

            if (filters.experience) {
                params.experience = filters.experience;
            }

            if (filters.location) {
                params.location = filters.location;
            }

            console.log("param is", params);

            const { data } = await axios.get(`${API_URL}/candidates`, {
                params,
            });

            console.log("data is", data);

            setCandidates(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const clearFilters = async () => {
        setFilters({
            skill: "",
            experience: "",
            location: "",
        });

        fetchCandidates();
    };

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">
                    Candidate Dashboard
                </h1>

                {/* <button
                    onClick={() =>
                        navigate("/upload-resumes")
                    }
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Upload Resumes
                </button> */}
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-12 gap-6">
                {/* Filters */}
                <div className="col-span-3">
                    <CandidateFilters
                        filters={filters}
                        setFilters={setFilters}
                        applyFilters={applyFilters}
                        clearFilters={clearFilters}
                    />
                </div>

                {/* Candidate List */}
                <div className="col-span-9">
                    {candidates.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <div className="grid md:grid-cols-2 gap-5">
                            {candidates.map((candidate) => (
                                <CandidateCard
                                    key={
                                        candidate._id ||
                                        candidate.id
                                    }
                                    candidate={candidate}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;