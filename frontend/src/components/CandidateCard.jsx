import { Link } from "react-router-dom";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiBriefcase,
} from "react-icons/fi";

function CandidateCard({
    candidate,
    onViewProfile,
}) {
    return (
        <div
            className="
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
      hover:-translate-y-1
      p-6
      border
      "
        >
            {/* Avatar */}

            <div
                className="
        w-16
        h-16
        rounded-full
        bg-blue-100
        flex
        items-center
        justify-center
        text-xl
        font-bold
        text-blue-600
        mb-4
        "
            >
                {(candidate.name || candidate.email || "U")
                    .charAt(0)
                    .toUpperCase()}
            </div>

            {/* Name */}

            <h3
                className="
        text-lg
        font-semibold
        text-gray-800
        "
            >
                {candidate.name || "Unknown Candidate"}
            </h3>

            {/* Email */}

            <div
                className="
        flex
        items-center
        gap-2
        text-gray-500
        mt-3
        "
            >
                <FiMail />
                <span className="truncate">
                    {candidate.email || "N/A"}
                </span>
            </div>

            {/* Phone */}

            <div
                className="
        flex
        items-center
        gap-2
        text-gray-500
        mt-2
        "
            >
                <FiPhone />
                <span>{candidate.phone || "N/A"}</span>
            </div>

            {/* Location */}

            <div
                className="
        flex
        items-center
        gap-2
        text-gray-500
        mt-2
        "
            >
                <FiMapPin />
                <span>{candidate.location || "N/A"}</span>
            </div>

            {/* Experience */}

            <div
                className="
        flex
        items-center
        gap-2
        mt-3
        text-gray-700
        font-medium
        "
            >
                <FiBriefcase />
                {candidate.years_experience || 0} Years Experience
            </div>

            {/* Skills */}

            <div className="mt-4">
                <h4
                    className="
          text-sm
          font-semibold
          text-gray-700
          mb-2
          "
                >
                    Skills
                </h4>

                <div
                    className="
          flex
          flex-wrap
          gap-2
          "
                >
                    {candidate.skills?.map((skill) => (
                        <span
                            key={skill}
                            className="
              px-3
              py-1
              rounded-full
              text-xs
              bg-blue-100
              text-blue-700
              "
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Actions */}

            <div className="mt-6 space-y-2">


                <Link
                    to={`/candidate/${candidate.id}`}
                    className="
          block
          text-center
          border
          py-2
          rounded-xl
          hover:bg-gray-100
          "
                >
                    Full Details
                </Link>
            </div>
        </div>
    );
}

export default CandidateCard;