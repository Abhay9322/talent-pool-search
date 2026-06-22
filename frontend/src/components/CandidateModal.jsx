import {
    FiX,
    FiDownload,
    FiMail,
    FiPhone,
    FiMapPin,
} from "react-icons/fi";

function CandidateModal({
    candidate,
    onClose,
}) {
    if (!candidate) return null;

    return (
        <div
            className="
      fixed
      inset-0
      bg-black/50
      flex
      justify-center
      items-center
      z-50
      p-4
      "
        >
            <div
                className="
        bg-white
        rounded-2xl
        shadow-xl
        w-full
        max-w-5xl
        max-h-[90vh]
        overflow-y-auto
        "
            >
                {/* Header */}

                <div
                    className="
          sticky
          top-0
          bg-white
          border-b
          p-6
          flex
          justify-between
          items-center
          "
                >
                    <h2 className="text-2xl font-bold">
                        Candidate Profile
                    </h2>

                    <button
                        onClick={onClose}
                        className="
            text-2xl
            text-gray-500
            "
                    >
                        <FiX />
                    </button>
                </div>

                <div className="p-8 space-y-8">
                    {/* Personal Info */}

                    <section>
                        <h3
                            className="
              text-xl
              font-semibold
              mb-4
              "
                        >
                            Personal Information
                        </h3>

                        <div className="space-y-3">
                            <p>
                                <strong>Name:</strong>{" "}
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
                        </div>
                    </section>

                    {/* Summary */}

                    <section>
                        <h3
                            className="
              text-xl
              font-semibold
              mb-4
              "
                        >
                            Professional Summary
                        </h3>

                        <p className="text-gray-600">
                            {candidate.summary}
                        </p>
                    </section>

                    {/* Skills */}

                    <section>
                        <h3
                            className="
              text-xl
              font-semibold
              mb-4
              "
                        >
                            Skills
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {candidate.skills?.map(
                                (skill, index) => (
                                    <span
                                        key={index}
                                        className="
                    px-3
                    py-2
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
                    </section>

                    {/* Experience */}

                    <section>
                        <h3
                            className="
              text-xl
              font-semibold
              mb-6
              "
                        >
                            Experience Timeline
                        </h3>

                        <div className="border-l-2 border-blue-200 ml-3">
                            {candidate.experienceHistory?.map(
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
                      bg-blue-500
                      rounded-full
                      "
                                        />

                                        <h4 className="font-semibold">
                                            {job.position}
                                        </h4>

                                        <p className="text-gray-600">
                                            {job.company}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {job.duration}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </section>

                    {/* Education */}

                    <section>
                        <h3
                            className="
              text-xl
              font-semibold
              mb-4
              "
                        >
                            Education
                        </h3>

                        {candidate.education?.map(
                            (edu, index) => (
                                <div
                                    key={index}
                                    className="
                  border
                  rounded-xl
                  p-4
                  mb-3
                  "
                                >
                                    <h4 className="font-semibold">
                                        {edu.degree}
                                    </h4>

                                    <p>{edu.college}</p>

                                    <p className="text-gray-500">
                                        {edu.year}
                                    </p>
                                </div>
                            )
                        )}
                    </section>

                    {/* Resume Download */}

                    <button
                        className="
            flex
            items-center
            gap-2
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-xl
            "
                    >
                        <FiDownload />

                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CandidateModal;