import { FiUploadCloud } from "react-icons/fi";

function UploadZone({
    files,
    setFiles,
}) {
    const handleChange = (e) => {
        const selectedFiles = Array.from(
            e.target.files
        );

        setFiles((prev) => [
            ...prev,
            ...selectedFiles,
        ]);
    };

    return (
        <div
            className="
      bg-white
      rounded-2xl
      shadow-md
      border-2
      border-dashed
      border-blue-300
      p-12
      text-center
      "
        >
            <FiUploadCloud
                className="
        text-6xl
        text-blue-500
        mx-auto
        "
            />

            <h2
                className="
        text-2xl
        font-semibold
        mt-4
        "
            >
                Upload Resumes
            </h2>

            <p className="text-gray-500 mt-2">
                PDF and DOCX files supported
            </p>

            <label
                className="
        inline-block
        mt-6
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-xl
        cursor-pointer
        hover:bg-blue-700
        "
            >
                Browse Files

                <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}

export default UploadZone;