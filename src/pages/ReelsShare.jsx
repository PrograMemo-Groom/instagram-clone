import PropTypes from 'prop-types';
import { useState } from 'react';

const ReelsShare = ({ onClose }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleCancel = () => {
        setIsFocused(false);
    };

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

                <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex text-black w-full px-3 py-2 rounded-lg bg-gray-100">
                            <img
                                src="/assets/reels/search.svg"
                                alt="검색"
                                className="flex w-5 h-5 mr-3 cursor-pointer"
                            />
                            <input
                                type="text"
                                placeholder="검색"
                                className="flex-1 bg-gray-100 focus:outline-none focus:ring-0 placeholder-neutral-500"
                                onFocus={handleFocus}
                            />
                        </div>

                        {isFocused && (
                            <button
                                className="ml-2 text-gray-600 px-2 text-sm font-medium flex-shrink-0"
                                onClick={handleCancel}
                            >
                                취소
                            </button>
                        )}
                    </div>
                </div>

                <div className="overflow-y-auto max-h-[300px] px-4 py-2 grid grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자1</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자2</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자3</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자4</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자5</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자6</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자7</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자8</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자9</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자10</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자11</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img
                            src="/assets/reels/reels_profile.png"
                            alt="프로필"
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <div>
                            <p className="text-xs">사용자12</p>
                        </div>
                    </div>

                </div>

                <div className="flex justify-start border-t py-4 mb-3 px-5">
                    <div className="flex flex-col items-center mr-6">
                        <button className="w-14 h-14 rounded-full bg-gray-100">
                            <img/>
                        </button>
                        <p className="text-xs mt-2">링크 복사</p>
                    </div>
                    <div className="flex flex-col items-center mr-6">
                        <button className="w-14 h-14 rounded-full bg-gray-100">
                            <img/>
                        </button>
                        <p className="text-xs mt-2">Facebook</p>
                    </div>
                    <div className="flex flex-col items-center mr-6">
                        <button className="w-14 h-14 rounded-full bg-gray-100">
                            <img/>
                        </button>
                        <p className="text-xs mt-2">Messenger</p>
                    </div>
                    <div className="flex flex-col items-center mr-6">
                        <button className="w-14 h-14 rounded-full bg-gray-100">
                            <img/>
                        </button>
                        <p className="text-xs mt-2">WhatsApp</p>
                    </div>
                    <div className="flex flex-col items-center mr-6">
                        <button className="w-14 h-14 rounded-full bg-gray-100">
                            <img/>
                        </button>
                        <p className="text-xs mt-2">Email</p>
                    </div>
                    <div className="flex flex-col items-center mr-6">
                        <button className="w-14 h-14 rounded-full bg-gray-100">
                            <img/>
                        </button>
                        <p className="text-xs mt-2">Threads</p>
                    </div>
                    <div className="flex flex-col items-center mr-6">
                        <button className="w-14 h-14 rounded-full bg-gray-100">
                            <img/>
                        </button>
                        <p className="text-xs mt-2">X</p>
                    </div>
                    <div className="flex flex-col items-center mr-6">
                        <button className="w-14 h-14 rounded-full bg-gray-100">
                            <img/>
                        </button>
                        <p className="text-xs mt-2">모두보기</p>
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
