import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserReels, getUserProfile, getReelComments } from "@/api/instagramAPI";
import { setReelsData, setUserProfile } from "@/store/reducer/ReelsReducer";
import { setActiveModal, setComments, toggleLike } from "@/store/action/ReelsAction";
import ReelsComment from './ReelsComment.jsx';
import ReelsShare from "./ReelsShare.jsx";
import ReelsMenu from "@/pages/Reels/ReelsMenu.jsx";

const Reels = () => {
    const dispatch = useDispatch();
    const { activeModal, reelsData, accessToken, userProfile, comments } = useSelector((state) => state.reels);

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

    const handleOpenComments = (mediaId) => {
        if (!comments[mediaId]) {
            getReelComments(mediaId, accessToken)
                .then((fetchedComments) => {
                    console.log("Storing comments for mediaId:", mediaId, fetchedComments); // 디버깅용 로그
                    dispatch(setComments(mediaId, fetchedComments));
                    dispatch(setActiveModal({ type: "comments", mediaId }));
                })
                .catch((err) => console.error("Error fetching comments:", err));
        } else {
            dispatch(setActiveModal({ type: "comments", mediaId }));
        }
    };

    const handleToggleLike = (reelId) => dispatch(toggleLike(reelId));
    const handleOpenModal = (modal, reelId = null) => dispatch(setActiveModal({ type: modal, mediaId: reelId }));
    const handleCloseModal = () => dispatch(setActiveModal(null));

    return (
        <div className="relative">
            <div className="mt-7 h-screen overflow-y-scroll scrollbar-hide scroll-smooth snap-y snap-mandatory">
                {/* Reels 데이터가 없을 경우 로딩 상태 표시 */}
                {reelsData.length === 0 ? (
                    <p className="text-white text-center mt-20">Loading Reels...</p>
                ) : (
                    reelsData.map((reel) => (
                        <div
                            key={reel.id} // 고유 key 추가
                            className="mb-7 snap-start flex flex-row justify-center items-center relative px-4"
                        >
                            <div
                                className="relative bg-gray-300 rounded overflow-hidden cursor-pointer
                                 lg:w-[440px] lg:h-[780px]
                                 sm:w-[400px] sm:h-[710px]
                                 w-[350px] h-[620px]"
                            >
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
                                            src={userProfile?.profile_picture_url || "/assets/reels/profile.png"}
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
                                        <p className="text-sm text-white">{reel.caption || ""}</p>
                                    </div>

                                    <div className="mt-3 flex items-center bg-gray-500 bg-opacity-50 p-2 rounded-3xl">
                                        <div className="text-white text-sm cursor-pointer">노래노래</div>
                                    </div>
                                </div>
                            </div>

                            {/* 사이드 메뉴 */}
                            <div className="ml-6 flex flex-col items-center space-y-4 z-10
                                            lg:mb-4 lg:mt-auto
                                            sm:mb-4 sm:mt-auto
                                            mb-4 mt-auto
                            ">
                                <div className="flex flex-col items-center hover:opacity-40">
                                    <img
                                        src={reel.isLiked ? "/assets/reels/liked_btn.svg" : "/assets/reels/like_btn.svg"}
                                        alt="Like"
                                        className="w-6 h-6 cursor-pointer"
                                        onClick={() => handleToggleLike(reel.id)}
                                    />
                                    <p className="text-xs">5.8만</p>
                                </div>

                                <div
                                    className="flex flex-col items-center hover:opacity-40 cursor-pointer"
                                    onClick={() => handleOpenComments(reel.id)}
                                >
                                    <img
                                        src="/assets/reels/comment_btn.svg"
                                        alt="Comment"
                                        className="w-6 h-6 mt-2 cursor-pointer"
                                    />
                                    <p className="text-xs">{comments[reel.id]?.length || 0}</p>
                                </div>

                                <div className="flex flex-col items-center hover:opacity-40">
                                    <img
                                        src="/assets/reels/share_btn.svg"
                                        alt="Share"
                                        className="w-6 h-6 mt-2 cursor-pointer"
                                        onClick={() => handleOpenModal("share", reel.id)}
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
                                        onClick={() => handleOpenModal("menu", reel.id)}
                                    />
                                </div>

                                <div className="flex flex-col items-center hover:opacity-60">
                                    <img
                                        src="/assets/reels/song.png"
                                        alt="Song"
                                        className="w-7 h-7 mt-4 rounded border border-black cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* 모달 */}
            {activeModal && (
                <div
                    className="fixed inset-0 z-40 flex justify-center items-center "
                    onClick={handleCloseModal}
                >
                    <div
                        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 방지
                    >
                        {activeModal.type === "comments" && (
                            <div className="relative">
                                <ReelsComment
                                    mediaId={activeModal.mediaId} onClose={handleCloseModal} />
                            </div>

                        )}
                        {activeModal.type === "share" && activeModal.mediaId && (
                            <ReelsShare reelId={activeModal.mediaId} onClose={handleCloseModal} />
                        )}
                        {activeModal.type === "menu" && activeModal.mediaId && (
                            <ReelsMenu reelId={activeModal.mediaId} onClose={handleCloseModal} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );

};

export default Reels;
