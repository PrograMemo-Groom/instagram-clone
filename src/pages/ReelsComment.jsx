const ReelsComment = ({ onClose }) => {
    return (
        <div className="absolute top-[40px] left-[-320px] bg-white w-[350px] h-[500px] rounded-lg shadow-lg z-50">
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
