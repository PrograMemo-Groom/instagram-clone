// import React from 'react';
import data from './data.json';

const SavedStories = () => {
    return (
        <div
            style={{
                msOverflowStyle: "none", // IE and Edge
                scrollbarWidth: "none"   // Firefox
            }}
            className="bg-white text-black dark:bg-black dark:text-white flex flex-nowrap lg:gap-x-12 md:gap-x-3 overflow-x-auto scrollbar-hide justify-items-start p-4 w-full">
            {data.map((data, index) => {
                return (
                    <div key={index}
                         className="relative flex flex-col flex-shrink-0 justify-evenly items-center cursor-pointer">
                        <img className="border-2 border-pink-600  w-[60px] h-[60px] rounded-full" src={data.src}/>
                        <span>{data.text}</span>
                    </div>
                )
            })}
        </div>


    );
};

export default SavedStories;