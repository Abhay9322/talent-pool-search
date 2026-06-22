import { FiUploadCloud } from "react-icons/fi";

function UploadNavbar() {
    return (
        <header
            className="
      sticky
      top-0
      z-50
      bg-white
      border-b
      shadow-sm
      "
        >
            <div
                className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
            >
                <div className="flex items-center gap-3">
                    <FiUploadCloud
                        className="
            text-blue-600
            text-3xl
            "
                    />

                    <h1
                        className="
            text-2xl
            font-bold
            text-gray-800
            "
                    >
                        AI Resume Screening
                    </h1>
                </div>
            </div>
        </header>
    );
}

export default UploadNavbar;