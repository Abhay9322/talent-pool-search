import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
    FiArrowLeft,
    FiMail,
    FiPhone,
    FiMapPin,
    FiBriefcase,
    FiDownload,
} from "react-icons/fi";

import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";

import { getCandidateById } from "../api/candidateApi";

function CandidateDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [candidate, setCandidate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchCandidate = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await getCandidateById(id);

            console.log("Candidate Data:", data);

            setCandidate(data);
        } catch (err) {
            console.error(err);
            setError("Failed to load candidate");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCandidate();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <ErrorState
                message={error}
                onRetry={fetchCandidate}
            />
        );
    }

    if (!candidate) {
        return (
            <div className="text-center py-10">
                Candidate not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">

                {/* Back Button */}

                <button
                    onClick={() => navigate(-1)}
                    className="
          flex
          items-center
          gap-2
          mb-6
          px-4
          py-2
          border
          rounded-xl
          bg-white
          hover:bg-gray-100
          "
                >
                    <FiArrowLeft />
                    Back
                </button>

                {/* Profile Header */}

                <div className="bg-white rounded-2xl shadow-md p-8">
                    <div className="flex flex-col md:flex-row gap-6">

                        {/* Avatar */}

                        <div
                            className="
              w-24
              h-24
              rounded-full
              bg-blue-100
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-blue-600
              "
                        >
                            {(candidate.name ||
                                candidate.email ||
                                "U")
                                .charAt(0)
                                .toUpperCase()}
                        </div>

                        {/* Profile Info */}

                        <div className="flex-1">
                            <h1 className="text-3xl font-bold">
                                {candidate.name ||
                                    "Unknown Candidate"}
                            </h1>

                            {candidate.current_job_title && (
                                <p className="text-gray-500 mt-2">
                                    {candidate.current_job_title}
                                </p>
                            )}

                            <div
                                className="
                mt-4
                grid
                md:grid-cols-2
                gap-3
                text-gray-600
                "
                            >
                                <p>
                                    <FiMail className="inline mr-2" />
                                    {candidate.email || "N/A"}
                                </p>

                                <p>
                                    <FiPhone className="inline mr-2" />
                                    {candidate.phone || "N/A"}
                                </p>

                                <p>
                                    <FiMapPin className="inline mr-2" />
                                    {candidate.location || "N/A"}
                                </p>

                                <p>
                                    <FiBriefcase className="inline mr-2" />
                                    {candidate.years_experience || 0}
                                    {" "}Years Experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary */}

                <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Professional Summary
                    </h2>

                    <p className="text-gray-600">
                        {candidate.summary ||
                            "No summary available"}
                    </p>
                </div>

                {/* Skills */}

                <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Skills
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {candidate.skills?.map((skill) => (
                            <span
                                key={skill}
                                className="
                px-4
                py-2
                bg-blue-100
                text-blue-700
                rounded-full
                "
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Work History */}

                <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
                    <h2 className="text-xl font-semibold mb-8">
                        Work History
                    </h2>

                    <div className="border-l-2 border-blue-200 ml-4">
                        {candidate.work_history?.map(
                            (job, index) => (
                                <div
                                    key={index}
                                    className="
                  relative
                  pl-8
                  pb-8
                  "
                                >
                                    <div
                                        className="
                    absolute
                    -left-[10px]
                    top-1
                    w-4
                    h-4
                    rounded-full
                    bg-blue-600
                    "
                                    />

                                    <h3 className="font-semibold text-lg">
                                        {job.jobTitle}
                                    </h3>

                                    <p className="text-gray-600">
                                        {job.company}
                                    </p>

                                    <p className="text-gray-500">
                                        {job.startDate} - {job.endDate}
                                    </p>

                                    <p className="mt-2 text-gray-600">
                                        {job.location}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Education */}

                <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
                    <h2 className="text-xl font-semibold mb-6">
                        Education
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {candidate.education?.map(
                            (edu, index) => (
                                <div
                                    key={index}
                                    className="
                  border
                  rounded-xl
                  p-5
                  "
                                >
                                    <h3 className="font-semibold">
                                        {edu.degree}
                                    </h3>

                                    <p>
                                        {edu.institution}
                                    </p>

                                    <p className="text-gray-500">
                                        {edu.startDate} - {edu.endDate}
                                    </p>

                                    {edu.gpa && (
                                        <p className="mt-2">
                                            GPA: {edu.gpa}
                                        </p>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Resume Download */}

                {candidate.resume_url && (
                    <div className="mt-6">
                        <a
                            href={candidate.resume_url}
                            target="_blank"
                            rel="noreferrer"
                            className="
              inline-flex
              items-center
              gap-2
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-blue-700
              transition
              "
                        >
                            <FiDownload />
                            Download Resume
                        </a>
                    </div>
                )}

            </div>
        </div>
    );
}

export default CandidateDetails;