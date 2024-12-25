const ReelsComment = ({ onClose }) => {
    return (
        <div className="absolute top-[40px] left-[-320px] bg-white rounded-lg shadow-lg z-50
            lg:w-[350px] lg:h-[500px]
            sm:w-[350px] sm:h-[470px]
            w-[350px] h-[370px]
        ">
            <button
                className="absolute top-4 left-4 "
                onClick={onClose}
            >
                ✕
            </button>

        </div>
    );
};

export default ReelsComment;
