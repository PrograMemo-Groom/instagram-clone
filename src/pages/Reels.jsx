import { useState } from 'react';
import ReelsComment from './ReelsComment.jsx';
import ReelsShare from "./ReelsShare.jsx";

const Reels = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [activeModal, setActiveModal] = useState(null); // 하나의 상태로 모달 관리

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
    };

    const openComments = () => {
        setActiveModal((prev) => (prev === 'comments' ? null : 'comments')); // 댓글 창 열기/닫기
    };

    const openShare = () => {
        setActiveModal((prev) => (prev === 'share' ? null : 'share')); // 공유 창 열기/닫기
    };

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
                                src="/assets/reels/reels_profile.png"
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
                            src={isLiked ? "/assets/reels/liked_btn.svg" : "/assets/reels/like_btn.svg"}
                            alt="Like"
                            className="w-6 h-6 cursor-pointer"
                            onClick={toggleLike}
                        />
                        <p className="text-xs">5.8만</p>
                    </div>

                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/reels/comment_btn.svg"
                            alt="Comment"
                            className="w-6 h-6 mt-2 cursor-pointer"
                            onClick={openComments}
                        />
                        <p className="text-xs">223</p>
                    </div>

                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/reels/share_btn.svg"
                            alt="Share"
                            className="w-6 h-6 mt-2 cursor-pointer"
                            onClick={openShare}
                        />
                    </div>

                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/reels/bookmark_btn.svg"
                            alt="Bookmark"
                            className="w-6 h-6 mt-3 cursor-pointer"
                        />
                    </div>

                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/reels/menu_btn.svg"
                            alt="Menu"
                            className="w-5 h-5 mt-3 cursor-pointer"
                        />
                    </div>

                    <div className="flex flex-col items-center hover:opacity-60">
                        <img
                            src="/assets/reels/song.png"
                            alt="Song"
                            className="w-7 h-7 mt-4 rounded border-1 border-black cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* 댓글 화면 */}
            {activeModal === 'comments' && (
                <div className="relative">
                    <ReelsComment onClose={() => setActiveModal(null)} />
                </div>
            )}
            {/* 공유 화면 */}
            {activeModal === 'share' && (
                <div className="relative">
                    <ReelsShare onClose={() => setActiveModal(null)} />
                </div>
            )}
        </div>
    );
};

export default Reels;
