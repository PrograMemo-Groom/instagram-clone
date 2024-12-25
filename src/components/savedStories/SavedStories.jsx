// import React from 'react';
import data from './data.json';

const SavedStories = () => {
    return (
        <div
            style={{
                msOverflowStyle: "none", // IE and Edge
                scrollbarWidth: "none"   // Firefox
            }}
            className="flex flex-nowrap gap-x-10 overflow-x-auto scrollbar-hide justify-items-start p-4 w-full bg-black">
            {data.map((data, index) => {
                return (
                    <div key={index}
                         className="relative flex flex-col flex-shrink-0 justify-evenly text-white items-center cursor-pointer">
                        <img className="w-[85px] h-[85px] rounded-full" src={data.src}/>
                        <span>{data.text}</span>
                    </div>
                )
            })}
        </div>
    );
};

export default SavedStories;