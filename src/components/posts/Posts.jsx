import {useState} from 'react';
import data from './data.json';

const Posts = () => {
    const [activeIndex, setActiveIndex] = useState(0); // 0: 게시물, 1: 릴스, 2: 태그됨
    const isPin = false;
    const hasManyImages = false;
    const isShorts = true;

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (<div className="bg-white text-black dark:bg-black dark:text-white flex flex-col p-4 w-full h-full">
        <div className="flex items-center justify-center gap-x-16 text-xs border-t-[1px] dark:border-t-gray-400">
            <button
                className={`p-2 flex gap-1 items-center ${activeIndex === 0 ? "border-t-[2px] border-black dark:border-white" : "border-t-[1px] border-transparent"}`}
                onClick={() => handleButtonClick(0)}
            >
                <img src="assets/icon/posts_icon.svg" alt="posts"/>게시물
            </button>
            <button
                className={`p-2 flex gap-1 items-center ${activeIndex === 1 ? "border-t-[2px] border-black dark:border-white" : "border-t-[1px] border-transparent"}`}
                onClick={() => handleButtonClick(1)}
            >
                <img src="/assets/icon/reels_icon.svg" alt="reels"/>릴스
            </button>
            <button
                className={`p-2 flex gap-1 items-center ${activeIndex === 2 ? "border-t-[2px] border-black dark:border-white" : "border-t-[1px] border-transparent"}`}
                onClick={() => handleButtonClick(2)}
            >
                <img src="/assets/icon/taged_icon.svg" alt="tagged"/>태그됨
            </button>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-1">
            {data.map((data, index) => {
                return (
                    <div
                        className="relative group"
                        key={index}>
                        {/* 정사각형 비율 유지 */}
                        <div className="w-full aspect-square relative">
                            <img
                                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                                src={data.thumnailSrc}
                                alt="thumbnail"
                            />
                        </div>

                        {isPin && (
                            <img
                                className="absolute top-[10px] right-[10px] w-5 h-5"
                                alt="pin"
                                src="assets/icon/pin_icon.svg"
                            />
                        )}
                        {hasManyImages && (
                            <img
                                className="absolute top-[10px] right-[10px] w-5 h-5"
                                alt="many-images"
                                src="assets/icon/square.svg"
                            />
                        )}
                        {isShorts && (
                            <img
                                className="absolute top-[10px] right-[10px] w-5 h-5"
                                alt="shorts"
                                src="assets/icon/shorts_icon.svg"
                            />
                        )}
                        {/* 좋아요와 댓글 개수 표시 */}
                        <div
                            className="absolute inset-0 gap-4 bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                            <div>❤️ {data.likes}</div>
                            <div>💬 {data.comments}</div>
                        </div>
                    </div>
                );
            })}
        </div>

    </div>);
};

export default Posts;
