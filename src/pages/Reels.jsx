import { useState } from 'react';
import ReelsComment from './ReelsComment.jsx';
import ReelsShare from "./ReelsShare.jsx";

const Reels = () => {
    const [showComments, setShowComments] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const toggleComments = () => {
        setShowComments((prev) => !prev);
    };
    const toggleShare = () => {
        setShowShare((prev) => !prev);
    }

    return (
        <div className="flex justify-center items-start h-screen mt-10">
            <div className="relative flex">
                <div className="relative bg-gray-300 rounded overflow-hidden cursor-pointer
                     lg:w-[440px] lg:h-[780px]
                     sm:w-[400px] sm:h-[720px]
                      w-[350px] h-[620px]
                     ">

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
                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/like_btn.svg"
                            alt="Like"
                            className="w-6 h-6 cursor-pointer"
                        />
                        <p className="text-xs">5.8만</p>
                    </div>

                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/comment_btn.svg"
                            alt="Comment"
                            className="w-6 h-6 mt-2 cursor-pointer"
                            onClick={toggleComments}
                        />
                        <p className="text-xs">223</p>
                    </div>

                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/share_btn.svg"
                            alt="Share"
                            className="w-6 h-6 mt-2 cursor-pointer"
                            onClick={toggleShare}
                        />
                    </div>

                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/bookmark_btn.svg"
                            alt="Bookmark"
                            className="w-6 h-6 mt-3 cursor-pointer"
                        />
                    </div>

                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/menu_btn.svg"
                            alt="Menu"
                            className="w-5 h-5 mt-3 cursor-pointer"
                        />
                    </div>

                    <div className="flex flex-col items-center hover:opacity-60">
                        <img
                            src="/assets/song.png"
                            alt="Song"
                            className="w-7 h-7 mt-4 rounded border-1 border-black cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* 댓글 화면 */}
            {showComments && (
                <div className="relative">
                    <ReelsComment onClose={toggleComments} />
                </div>
            )}
            {/* 공유 화면 */}
            {showShare && (
                <div className="relative">
                    <ReelsShare onClose={toggleShare} />
                </div>
            )}
        </div>
    );
};

export default Reels;