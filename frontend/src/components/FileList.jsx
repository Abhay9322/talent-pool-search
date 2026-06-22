import {
    FiFileText,
    FiTrash2,
} from "react-icons/fi";

function FileList({
    files,
    removeFile,
}) {
    if (!files.length) return null;

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
                Selected Files
            </h2>

            <div className="space-y-4">
                {files.map((file, index) => (
                    <div
                        key={index}
                        className="
            flex
            justify-between
            items-center
            border
            rounded-xl
            p-4
            "
                    >
                        <div className="flex gap-3">
                            <FiFileText
                                className="
                text-2xl
                text-blue-500
                "
                            />

                            <div>
                                <p className="font-medium">
                                    {file.name}
                                </p>

                                <p
                                    className="
                  text-sm
                  text-gray-500
                  "
                                >
                                    {(
                                        file.size /
                                        1024
                                    ).toFixed(2)}
                                    KB
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() =>
                                removeFile(index)
                            }
                            className="
              text-red-500
              text-xl
              "
                        >
                            <FiTrash2 />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FileList;