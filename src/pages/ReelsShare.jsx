const ReelsShare = ({}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-[550px] rounded-lg shadow-lg">
                <div className="flex items-center justify-between px-4 py-2 border-b">
                    <h2 className="text-center font-bold flex-1">공유</h2>
                    <button
                        className="font-bold text-lg"
                    >
                        ✕
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReelsShare;
