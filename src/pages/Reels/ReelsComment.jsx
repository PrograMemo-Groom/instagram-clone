import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "@/store/action/ReelsAction";
import { getUserProfile } from "@/api/instagramAPI";
import { setUserProfile } from "@/store/reducer/ReelsReducer";
import PropTypes from 'prop-types';

const ReelsComment = ({ mediaId, onClose }) => {
    const dispatch = useDispatch();
    const { accessToken, userProfile } = useSelector((state) => state.reels);
    const comments = useSelector((state) => state.reels.comments[mediaId] || []);
    const [newComment, setNewComment] = useState("");

    // 사용자 프로필 가져오기
    useEffect(() => {
        if (accessToken && !userProfile) {
            getUserProfile(accessToken)
                .then((profile) => dispatch(setUserProfile(profile)))
                .catch((err) => console.error("Error fetching user profile:", err));
        }
    }, [accessToken, userProfile, dispatch]);

    const handleAddComment = (e) => {
        if (e.key === "Enter" && newComment.trim() !== "") {
            const comment = {
                id: new Date().getTime().toString(), // 임시 ID 생성
                username: userProfile?.username || "anonymous", // 현재 사용자 이름
                text: newComment.trim(),
                timestamp: new Date().toISOString(),
            };
            dispatch(addComment(mediaId, comment));
            setNewComment(""); // 입력창 초기화
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 absolute
                lg:w-[350px] lg:h-[500px] lg:left-[200px] lg:bottom-[-180px]
                sm:w-[350px] sm:h-[470px] sm:left-[-20px] sm:bottom-[-150px]
                w-[350px] h-[370px] left-[-200px] bottom-[-100px]
                flex flex-col"
             onClick={(e) => e.stopPropagation()}
        >
            <div className="flex items-center justify-between mb-4 relative">
                <button
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h2 className="text-base font-bold text-center flex-1">댓글</h2>
            </div>

            <div className="overflow-y-auto flex-1 mb-4 pt-4">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="mb-4 flex items-start">
                            <img
                                src={userProfile?.profile_picture_url || "/assets/reels/profile.png"}
                                alt={userProfile?.username || "Profile"}
                                className="w-8 h-8 rounded-full mr-3 cursor-pointer"
                            />
                            <div className="flex-1">
                                <div className="flex">
                                    <p className="text-sm font-bold cursor-pointer">{comment.username}</p>
                                    <p className="text-sm text-neutral-500 cursor-pointer">
                                        &nbsp;{new Date(comment.timestamp).toLocaleDateString()}
                                    </p>
                                </div>
                                <p className="text-sm">{comment.text}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src="/assets/reels/like_btn2.svg"
                                    alt="좋아요"
                                    className="w-5 h-5 mr-3 cursor-pointer"
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-sm">댓글이 없습니다.</p>
                )}
            </div>

            <div className="flex items-center bg-gray-100 rounded-full p-1 border">
                <img
                    src={userProfile?.profile_picture_url || "/assets/reels/profile.png"}
                    alt={userProfile?.username || "Profile"}
                    className="w-8 h-8 rounded-full mr-3"
                />
                <input
                    type="text"
                    placeholder="댓글 달기..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={handleAddComment}
                    className="flex-1 bg-transparent outline-none text-sm"
                />
            </div>
        </div>
    );
};

ReelsComment.propTypes = {
    mediaId: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ReelsComment;