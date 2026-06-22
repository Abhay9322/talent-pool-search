import { FiUsers } from "react-icons/fi";

function EmptyState({
    onClear,
}) {
    return (
        <div
            className="
      bg-white
      rounded-2xl
      shadow-md
      p-12
      text-center
      "
        >
            <FiUsers
                className="
        mx-auto
        text-6xl
        text-gray-300
        "
            />

            <h2
                className="
        mt-6
        text-2xl
        font-semibold
        "
            >
                No candidates match your
                filters
            </h2>

            <p
                className="
        text-gray-500
        mt-3
        "
            >
                Try adjusting filters or
                search criteria
            </p>

            <button
                onClick={onClear}
                className="
        mt-6
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-xl
        "
            >
                Clear Filters
            </button>
        </div>
    );
}

export default EmptyState;