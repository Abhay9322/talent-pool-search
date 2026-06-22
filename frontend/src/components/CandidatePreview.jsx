import {
    FiUser,
    FiMail,
    FiPhone,
    FiMapPin,
    FiBriefcase,
} from "react-icons/fi";

function CandidatePreview({
    candidate,
}) {
    if (!candidate) return null;

    return (
        <div
            className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      "
        >
            <h2
                className="
        text-xl
        font-semibold
        mb-5
        "
            >
                Candidate Preview
            </h2>

            <div className="space-y-3">
                <p>
                    <FiUser className="inline mr-2" />
                    {candidate.name}
                </p>

                <p>
                    <FiMail className="inline mr-2" />
                    {candidate.email}
                </p>

                <p>
                    <FiPhone className="inline mr-2" />
                    {candidate.phone}
                </p>

                <p>
                    <FiMapPin className="inline mr-2" />
                    {candidate.location}
                </p>

                <p>
                    <FiBriefcase className="inline mr-2" />
                    {candidate.recentJobTitle}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                    {candidate.skills?.map(
                        (skill, index) => (
                            <span
                                key={index}
                                className="
                px-3
                py-1
                bg-blue-100
                text-blue-700
                rounded-full
                "
                            >
                                {skill}
                            </span>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default CandidatePreview;