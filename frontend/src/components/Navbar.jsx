import { useState } from "react";

import {
    FiMenu,
    FiX,
    FiUsers,
} from "react-icons/fi";

import SearchBar from "./SearchBar";

function Navbar({
    search,
    setSearch,
    totalCandidates,
}) {
    const [mobileOpen, setMobileOpen] =
        useState(false);

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
        max-w-[1600px]
        mx-auto
        px-6
        py-4
        "
            >
                <div
                    className="
          flex
          items-center
          justify-between
          gap-4
          "
                >
                    {/* Logo */}

                    <div>
                        <h1
                            className="
              text-xl
              md:text-2xl
              font-bold
              text-gray-800
              "
                        >
                            AI Resume Screening Dashboard
                        </h1>
                    </div>

                    {/* Desktop Search */}

                    <div className="hidden md:block flex-1">
                        <SearchBar
                            value={search}
                            onChange={setSearch}
                        />
                    </div>

                    {/* Candidate Count */}

                    <div
                        className="
            hidden
            md:flex
            items-center
            gap-2
            bg-blue-50
            text-blue-600
            px-4
            py-2
            rounded-xl
            font-medium
            "
                    >
                        <FiUsers />

                        <span>
                            Total Candidates:
                            {" "}
                            {totalCandidates}
                        </span>
                    </div>

                    {/* Mobile Menu */}

                    <button
                        onClick={() =>
                            setMobileOpen(!mobileOpen)
                        }
                        className="
            md:hidden
            text-2xl
            "
                    >
                        {mobileOpen ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                    </button>
                </div>

                {/* Mobile Content */}

                {mobileOpen && (
                    <div
                        className="
            mt-4
            space-y-4
            md:hidden
            "
                    >
                        <SearchBar
                            value={search}
                            onChange={setSearch}
                        />

                        <div
                            className="
              flex
              items-center
              gap-2
              bg-blue-50
              text-blue-600
              p-3
              rounded-xl
              "
                        >
                            <FiUsers />

                            <span>
                                Total Candidates:
                                {" "}
                                {totalCandidates}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;