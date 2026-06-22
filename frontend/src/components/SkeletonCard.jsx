function SkeletonCard() {
    return (
        <div
            className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      animate-pulse
      "
        >
            <div
                className="
        w-16
        h-16
        rounded-full
        bg-gray-200
        "
            />

            <div
                className="
        h-5
        bg-gray-200
        rounded
        mt-4
        "
            />

            <div
                className="
        h-4
        bg-gray-200
        rounded
        mt-3
        "
            />

            <div
                className="
        h-4
        bg-gray-200
        rounded
        mt-3
        "
            />

            <div className="flex gap-2 mt-4">
                <div
                    className="
          w-16
          h-6
          bg-gray-200
          rounded-full
          "
                />

                <div
                    className="
          w-16
          h-6
          bg-gray-200
          rounded-full
          "
                />
            </div>

            <div
                className="
        h-10
        bg-gray-200
        rounded-xl
        mt-6
        "
            />
        </div>
    );
}

export default SkeletonCard;