function ProcessingProgress({
    progress,
}) {
    return (
        <div
            className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      "
        >
            <div
                className="
        flex
        justify-between
        mb-3
        "
            >
                <h2 className="font-semibold">
                    Processing Progress
                </h2>

                <span>{progress}%</span>
            </div>

            <div
                className="
        w-full
        bg-gray-200
        rounded-full
        h-4
        "
            >
                <div
                    className="
          bg-blue-600
          h-4
          rounded-full
          transition-all
          duration-500
          "
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
        </div>
    );
}

export default ProcessingProgress;