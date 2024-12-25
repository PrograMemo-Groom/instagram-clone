// import React from 'react';
import data from './data.json';

const Posts = () => {
    return (
        <div className="bg-white text-black  dark:bg-black dark:text-white flex flex-col p-4 w-full h-full">
            <div className="flex items-center justify-center gap-x-16 text-xs border-t-[1px] dark:border-t-gray-400">
        <span className="p-2 flex gap-1 items-center border-t-[1px]  border-black dark:border-white">
            <img src="assets/icon/posts_icon.svg"/>게시물
        </span>
                <span className="p-2 flex gap-1 items-center border-t-[1px]  border-black dark:border-white">
            <img src="/assets/icon/reels_icon.svg"/>릴스
        </span>
                <span className="p-2 flex gap-1 items-center border-t-[1px]  border-black dark:border-white">
            <img src="/assets/icon/taged_icon.svg"/>태그됨
        </span>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-1">
                {data.map((data, index) => {
                    return (
                        <div className="h-[308px]" key={index}>
                            <img className="w-full h-full object-cover cursor-pointer" src={data.thumnailSrc}/>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default Posts;