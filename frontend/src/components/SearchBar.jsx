import { FiSearch } from "react-icons/fi";

function SearchBar({
    value,
    onChange,
}) {
    return (
        <div className="relative w-full max-w-lg">
            <FiSearch
                className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
          text-lg
        "
            />

            <input
                type="text"
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                placeholder="Search candidate by name or skill"
                className="
          w-full
          pl-12
          pr-4
          py-3
          border
          rounded-xl
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
            />
        </div>
    );
}

export default SearchBar;