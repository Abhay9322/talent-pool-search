import { FiAlertCircle } from "react-icons/fi";

function ErrorState({
    message,
    onRetry,
}) {
    return (
        <div
            className="
      bg-white
      rounded-2xl
      shadow-md
      p-10
      text-center
      "
        >
            <FiAlertCircle
                className="
        mx-auto
        text-red-500
        text-6xl
        "
            />

            <h2
                className="
        text-2xl
        font-semibold
        mt-4
        "
            >
                Something went wrong
            </h2>

            <p
                className="
        text-gray-500
        mt-2
        "
            >
                {message}
            </p>

            <button
                onClick={onRetry}
                className="
        mt-6
        bg-red-500
        text-white
        px-6
        py-3
        rounded-xl
        "
            >
                Retry
            </button>
        </div>
    );
}

export default ErrorState;