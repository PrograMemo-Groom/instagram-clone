import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const ReelsComment = ({ mediaId, onClose }) => {
    const comments = useSelector((state) => state.reels.comments[mediaId] || []);

    console.log("Rendering comments for mediaId:", mediaId, comments);

    return (
        <div
            className="bg-white rounded-lg shadow-lg p-6 absolute
                lg:w-[350px] lg:h-[500px] lg:left-[-20px] lg:bottom-[-200px]
                sm:w-[350px] sm:h-[470px] sm:left-[-130px] sm:bottom-[-150px]
                w-[350px] h-[370px] left-[-200px] bottom-[-100px]
                flex flex-col"
            onClick={(e) => e.stopPropagation()} // 클릭 이벤트 버블링 방지
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
                                src="/assets/reels/reels_profile.png"
                                alt="프로필"
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
                        </div>
                    ))
                ) : (
                    <p className="text-center text-sm">댓글이 없습니다.</p>
                )}
            </div>


            <div className="flex items-center bg-gray-100 rounded-full p-1 border">
                <img
                    src="/assets/reels/reels_profile.png"
                    alt="프로필"
                    className="w-8 h-8 rounded-full mr-3"
                />
                <input
                    type="text"
                    placeholder="댓글 달기..."
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
