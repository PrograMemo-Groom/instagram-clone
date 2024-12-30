import PropTypes from 'prop-types';

const ReelsComment = ({ onClose }) => {
    const comments = [
        { username: "사용자1", daysAgo: "1일", content: "댓글 내용", likes: 10 },
        { username: "사용자2", daysAgo: "1일", content: "댓글 내용", likes: 10 },
        { username: "사용자3", daysAgo: "1일", content: "댓글 내용", likes: 10 },
        { username: "사용자4", daysAgo: "1일", content: "댓글 내용", likes: 10 },
        { username: "사용자5", daysAgo: "1일", content: "댓글 내용", likes: 10 },
        { username: "사용자6", daysAgo: "1일", content: "댓글 내용", likes: 10 },
    ];

    return (
        <div className="absolute top-[40px] left-[-320px] bg-white rounded-lg shadow-lg z-50 p-6
            lg:w-[350px] lg:h-[500px]
            sm:w-[350px] sm:h-[470px]
            w-[350px] h-[370px]
            flex flex-col
        ">
            <div className="flex items-center justify-between mb-4 relative">
                <button
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 "
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2 className="text-base font-bold text-center flex-1">댓글</h2>

            </div>

            <div className="overflow-y-auto flex-1 mb-4 pt-4">
                {comments.map((comment, index) => (
                    <div key={index} className="mb-4 flex items-star">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-8 h-8 rounded-full mr-3 cursor-pointer"
                        />
                        <div className="flex-1">
                            <div className="flex">
                                <p className="text-sm font-bold cursor-pointer">{comment.username}</p>
                                <p className="text-sm text-neutral-500 cursor-pointer">&nbsp;{comment.daysAgo}</p>
                            </div>
                            <p className="text-sm">{comment.content}</p>
                            <div className="flex items-center mt-1 text-neutral-500 text-sm">
                                <span className="text-xs cursor-pointer">좋아요 {comment.likes}개</span>
                                <span className="text-xs ml-3 cursor-pointer">답글 달기</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src="/assets/reels/like_btn2.svg"
                                alt="좋아요"
                                className="w-5 h-5 mr-3 cursor-pointer"
                            />
                        </div>
                    </div>
                ))}
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
    onClose: PropTypes.func.isRequired,
};

export default ReelsComment;
