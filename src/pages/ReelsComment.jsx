const ReelsComment = ({ onClose }) => {
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

            <div className="overflow-y-auto flex-1 mb-4  pt-4">
                <div className="mb-4">
                    <p className="font-bold">사용자1</p>
                    <p className="text-sm ">댓글 내용 1</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">사용자2</p>
                    <p className="text-sm ">댓글 내용 2</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">사용자3</p>
                    <p className="text-sm ">댓글 내용 3</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">사용자4</p>
                    <p className="text-sm ">댓글 내용 3</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">사용자5</p>
                    <p className="text-sm ">댓글 내용 3</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">사용자6</p>
                    <p className="text-sm ">댓글 내용 3</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">사용자7</p>
                    <p className="text-sm ">댓글 내용 3</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">사용자8</p>
                    <p className="text-sm ">댓글 내용 3</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">사용자9</p>
                    <p className="text-sm ">댓글 내용 3</p>
                </div>
            </div>

            <div className="flex items-center bg-gray-100 rounded-full p-1 border">
                <img
                    src=""
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

export default ReelsComment;
