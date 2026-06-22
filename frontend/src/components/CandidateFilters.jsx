import { FiFilter } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function CandidateFilters({
    filters,
    setFilters,
    applyFilters,
    clearFilters,
}) {

    const navigate = useNavigate()
    return (
        <div
            className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      sticky
      top-24
      "
        >
            <div
                className="
        flex
        items-center
        gap-2
        mb-6
        "
            >
                <FiFilter />

                <h3 className="font-semibold">
                    Filters
                </h3>
            </div>

            <div className="space-y-5">
                <div>
                    <label className="text-sm">
                        Skill
                    </label>

                    <input
                        type="text"
                        placeholder="React, Node.js..."
                        value={filters.skill}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                skill:
                                    e.target.value,
                            })
                        }
                        className="
            w-full
            mt-2
            border
            rounded-xl
            p-3
            "
                    />
                </div>

                <div>
                    <label className="text-sm">
                        Experience
                    </label>

                    <input
                        type="number"
                        placeholder="Minimum Experience"
                        value={
                            filters.experience
                        }
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                experience:
                                    e.target.value,
                            })
                        }
                        className="
            w-full
            mt-2
            border
            rounded-xl
            p-3
            "
                    />
                </div>

                <div>
                    <label className="text-sm">
                        Location
                    </label>

                    <input
                        type="text"
                        placeholder="Mumbai"
                        value={
                            filters.location
                        }
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                location:
                                    e.target.value,
                            })
                        }
                        className="
            w-full
            mt-2
            border
            rounded-xl
            p-3
            "
                    />
                </div>

                <button
                    onClick={applyFilters}
                    className="
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-xl
          "
                >
                    Apply Filters
                </button>

                <button
                    onClick={clearFilters}
                    className="
          w-full
          border
          py-3
          rounded-xl
          "
                >
                    Clear Filters
                </button>
                <button
                    onClick={() => navigate("/upload-resumes")}
                    className="
          w-full
          border
          py-3
          rounded-xl
          "
                >
                    Upload Resumes
                </button>
            </div>
        </div>
    );
}

export default CandidateFilters;