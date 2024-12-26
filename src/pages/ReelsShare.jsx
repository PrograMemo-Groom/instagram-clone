import PropTypes from 'prop-types';

const ReelsShare = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-[550px] rounded-lg shadow-lg">
                <div className="flex items-center justify-between px-4 py-2 border-b">
                    <h2 className="text-center font-bold flex-1">공유</h2>
                    <button
                        className="font-bold text-lg"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <div className="px-6 py-5">
                    <div className="flex text-black w-full px-3 py-2 rounded-lg bg-gray-100">
                        <img
                            src="/assets/reels/search.svg"
                            alt="검색"
                            className="flex w-5 h-5 mr-3 cursor-pointer"
                        />
                        <input
                            type="text"
                            placeholder="검색"
                            className="flex-1 bg-gray-100 focus:outline-none focus:ring-0
                                    placeholder-neutral-500"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

ReelsShare.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ReelsShare;
