import React from 'react';

const Reels = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative flex">
                <div className="relative w-[440px] h-[780px] bg-gray-300 rounded overflow-hidden cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full p-4">
                        <div className="flex items-center">
                            <img
                                src="/assets/reels_profile.png"
                                alt="Profile"
                                className="w-8 h-8 rounded-full cursor-pointer"
                            />
                            <div className="ml-3">
                                <p className="font-bold text-white text-sm cursor-pointer">사용자 id</p>
                            </div>
                            <div className="ml-3">
                                <p className="text-white"> • </p>
                            </div>
                            <div className="ml-3">
                                <button className="font-bold text-white text-sm border rounded-lg px-1.5 py-1 cursor-pointer">팔로우</button>
                            </div>
                        </div>

                        <div className="mt-3">
                            <p className="text-sm text-white">내용</p>
                        </div>

                        <div className="mt-3 flex items-center bg-gray-500 bg-opacity-50 p-2 rounded-3xl">
                            <div className="text-white text-sm cursor-pointer">노래노래</div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-4 right-[-60px] flex flex-col items-center space-y-4">
                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/like_btn.svg"
                            alt="Like"
                            className="w-6 h-6 cursor-pointer"
                        />
                        <p className="text-xs">5.8만</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/comment_btn.svg"
                            alt="Comment"
                            className="w-6 h-6 mt-2 cursor-pointer"
                        />
                        <p className="text-xs">223</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/share_btn.svg"
                            alt="Share"
                            className="w-6 h-6 mt-2 cursor-pointer"
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/bookmark_btn.svg"
                            alt="Bookmark"
                            className="w-6 h-6 mt-3 cursor-pointer"
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/menu_btn.svg"
                            alt="Menu"
                            className="w-5 h-5 mt-3 cursor-pointer"
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/song.png"
                            alt="Song"
                            className="w-7 h-7 mt-4 rounded border-1 border-black cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reels;
