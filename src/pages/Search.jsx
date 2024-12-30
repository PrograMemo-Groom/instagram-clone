import React from "react";
import SearchTab from "@/components/searchTab/SearchTab.jsx";

const Search = () => {
    return (
        <div className="flex justify-center w-full h-full">
            <div className="relative w-full aspect-[16/9]">
                <div className="absolute top-0 left-0 w-full h-full mx-auto">
                    <div className="w-full h-full mx-auto">
                        <SearchTab/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;