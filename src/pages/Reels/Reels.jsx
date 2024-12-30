import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserReels, getUserProfile } from "@/api/instagramAPI";
import { setReelsData, setUserProfile } from "@/store/reducer/ReelsReducer";
import { setActiveModal, toggleLike } from "@/store/action/ReelsAction";
import ReelsComment from './ReelsComment.jsx';
import ReelsShare from "./ReelsShare.jsx";
import ReelsMenu from "@/pages/Reels/ReelsMenu.jsx";

const Reels = () => {
    const dispatch = useDispatch();
    const { isLiked, activeModal, reelsData, accessToken, userProfile } = useSelector((state) => state.reels);

    // Access Token을 사용하여 Reels 데이터를 가져옴
    useEffect(() => {
        if (accessToken) {
            // 사용자 프로필 가져오기
            getUserProfile(accessToken)
                .then((profile) => {
                    dispatch(setUserProfile(profile)); // Redux에 사용자 프로필 저장
                })
                .catch((err) => console.error("Error fetching user profile:", err));

            // Reels 데이터 가져오기
            getUserReels(accessToken)
                .then((data) => {
                    dispatch(setReelsData(data)); // 가져온 데이터를 Redux에 저장
                })
                .catch((err) => console.error("Error fetching Reels data:", err));
        }
    }, [accessToken, dispatch]);

    const handleToggleLike = () => dispatch(toggleLike());
    const handleOpenModal = (modal) => dispatch(setActiveModal(modal));
    const handleCloseModal = () => dispatch(setActiveModal(null));

    return (
        <div className="flex justify-center items-start h-screen mt-10">
            {/* Reels 데이터가 없을 경우 로딩 상태 표시 */}
            { reelsData.length === 0 ? (
                <p>Loading Reels...</p>
            ) : (
                reelsData.map((reel) => (
                    <div
                        key={reel.id} // 고유 key 추가
                        className="relative flex"
                    >
                <div
                     className="relative bg-gray-300 rounded overflow-hidden cursor-pointer
                     lg:w-[440px] lg:h-[780px]
                     sm:w-[400px] sm:h-[720px]
                      w-[350px] h-[620px]
                     ">
                    {reel.media_type === "VIDEO" ? (
                        <video
                            src={reel.media_url}
                            controls
                            className="w-full h-full rounded"
                        />
                    ) : (
                        <img
                            src={reel.media_url}
                            alt={reel.caption || "No caption"}
                            className="w-full h-full rounded"
                        />
                    )}

                    <div className="absolute bottom-0 left-0 w-full p-4">
                        <div className="flex items-center">
                            <img
                                src={userProfile?.profile_picture_url || "/assets/reels/reels_profile.png"}
                                alt={userProfile?.username || "Profile"}
                                className="w-8 h-8 rounded-full cursor-pointer"
                            />
                            <div className="ml-3">
                                <p className="font-bold text-white text-sm cursor-pointer">
                                    {userProfile?.username || "사용자 id"}
                                </p>
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
                            onClick={handleToggleLike}
                        />
                        <p className="text-xs">5.8만</p>
                    </div>

                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/reels/comment_btn.svg"
                            alt="Comment"
                            className="w-6 h-6 mt-2 cursor-pointer"
                            onClick={() => handleOpenModal("comments")}
                        />
                        <p className="text-xs">223</p>
                    </div>

                    <div className="flex flex-col items-center hover:opacity-40">
                        <img
                            src="/assets/reels/share_btn.svg"
                            alt="Share"
                            className="w-6 h-6 mt-2 cursor-pointer"
                            onClick={() => handleOpenModal("share")}
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
                            onClick={() => handleOpenModal("menu")}
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

                ))
            )}
            {/* 모달 */}
            {activeModal && <div className="fixed inset-0 z-40" onClick={handleCloseModal}></div>}
            {activeModal === "comments" && (
                <div className="relative">
                <ReelsComment onClose={handleCloseModal} />
                </div>
                )}
            {activeModal === "share" && (
                <div className="relative">
                <ReelsShare onClose={handleCloseModal} />
                </div>
            )}
            {activeModal === "menu" && (
                <div className="relative">
                    <ReelsMenu onClose={handleCloseModal}/>
                </div>
            )}

        </div>
    );
};

export default Reels;
