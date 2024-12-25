// import React from 'react';
import data from './data.json';
const Posts = () => {
    return (
        <div className="flex flex-col p-4 w-full h-full bg-black text-white border-t-gray-400">
            <div className="flex items-center justify-center gap-x-16 text-xs">
                <span className="p-2 flex gap-1">
                    <img src="assets/icon/posts_icon.svg"/>게시물</span>
                <span className="p-2 bg-amber-300">릴스</span>
                <span className="p-2 bg-amber-300">태그됨</span>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-1">
                {data.map((data, index) => {
                    return (
                        <div className="h-[308px]" key={index}>
                            <img className="w-full h-full object-cover" src={data.thumnailSrc}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Posts;