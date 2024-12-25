const ReelsComment = ({ onClose }) => {
    return (
        <div className="absolute top-[40px] left-[-320px] bg-white rounded-lg shadow-lg z-50 p-6
            lg:w-[350px] lg:h-[500px]
            sm:w-[350px] sm:h-[470px]
            w-[350px] h-[370px]
        ">
            <div className="flex items-center justify-between mb-4 relative">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 "
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2 className="text-base font-bold text-center flex-1">댓글</h2>

            </div>
        </div>

    );
};

export default ReelsComment;
