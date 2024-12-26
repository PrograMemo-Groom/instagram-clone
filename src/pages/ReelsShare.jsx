import PropTypes from 'prop-types';
import { useState } from 'react';

const ReelsShare = ({ onClose }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);


    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleCancel = () => {
        setIsFocused(false);
    };

    const handleNext = () => {
        const scrollContainer = document.getElementById("share-scroll-container");
        if (scrollContainer) {
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            setScrollPosition((prev) => Math.min(prev + 300, maxScrollLeft));
            scrollContainer.scrollLeft = Math.min(scrollPosition + 100, maxScrollLeft);
        }
    };

    const handlePrev = () => {
        const scrollContainer = document.getElementById("share-scroll-container");
        if (scrollContainer) {
            setScrollPosition((prev) => Math.max(prev - 300, 0));
            scrollContainer.scrollLeft = Math.max(scrollPosition - 300, 0);
        }
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

                <div className="flex justify-between items-center border-t py-4 px-5 relative">
                    <button
                        className="font-bold text-white p-2 w-7 h-7 rounded-full bg-gray-600 bg-opacity-70 flex justify-center items-center absolute top-1/2 left-2 transform -translate-y-1/2 z-10"
                        onClick={handlePrev}
                    >
                        ＜
                    </button>

                    <div
                        id="share-scroll-container"
                        className="flex overflow-x-scroll gap-4 scrollbar-hide w-full"
                    >
                        <div className="flex flex-col items-center mr-6">
                            <button className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center">
                                <img
                                    src="/assets/reels/link.svg"
                                    alt="링크복사"
                                    className="w-5 h-5"
                                />
                            </button>
                            <p className="text-xs mt-2">링크 복사</p>
                        </div>
                        <div className="flex flex-col items-center mr-6">
                            <button
                                className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center"
                                onClick={() => window.location.href = 'https://www.facebook.com/sharer/sharer.php?app_id=1217981644879628&u=https%3A%2F%2Fwww.instagram.com%2Freel%2FDEAU-H-T7Ff%2F%3Figsh%3DMjAyZTYwOWFjOA%3D%3D'}
                            >
                                <img
                                    src="/assets/reels/facebook.svg"
                                    alt="페이스북"
                                    className="w-6 h-6"
                                />
                            </button>
                            <p className="text-xs mt-2">Facebook</p>
                        </div>
                        <div className="flex flex-col items-center mr-6 ">
                            <button
                                className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center"
                                onClick={() => window.location.href = 'https://www.facebook.com/login.php?api_key=1217981644879628&skip_api_login=1&display=page&cancel_url=https%3A%2F%2Fwww.instagram.com%2Freel%2FDEAU-H-T7Ff%2F%3Figsh%3DM2ViY2RjMDFkMA%3D%3D&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fsend%3F_path%3Dsend%26app_id%3D1217981644879628%26client_id%3D1217981644879628%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Freel%252FDEAU-H-T7Ff%252F%253Figsh%253DM2ViY2RjMDFkMA%253D%253D%26display%3Dpage%26link%3Dhttps%253A%252F%252Fwww.instagram.com%252Freel%252FDEAU-H-T7Ff%252F%253Figsh%253DM2ViY2RjMDFkMA%253D%253D%26from_login%3D1'}
                            >
                                <img
                                    src="/assets/reels/messenger.svg"
                                    alt="메신저"
                                    className="w-6 h-6"
                                />
                            </button>
                            <p className="text-xs mt-2">Messenger</p>
                        </div>
                        <div className="flex flex-col items-center mr-6">
                            <button
                                className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center"
                                onClick={() => window.location.href = 'https://api.whatsapp.com/send/?text=%40vkvkvk_11%EB%8B%98%EC%9D%98+%EC%9D%B4+Instagram+%EA%B2%8C%EC%8B%9C%EB%AC%BC+%EB%B3%B4%EA%B8%B0%3A+https%3A%2F%2Fwww.instagram.com%2Freel%2FDEAU-H-T7Ff%2F%3Figsh%3DYzAyMDM1MGJkZA%3D%3D&type=custom_url&app_absent=0'}
                            >
                                <img
                                    src="/assets/reels/whatsapp.svg"
                                    alt="whatsApp"
                                    className="w-5 h-5"
                                />
                            </button>
                            <p className="text-xs mt-2">WhatsApp</p>
                        </div>
                        <div className="flex flex-col items-center mr-6">
                            <button
                                className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center"
                                onClick={() => window.location.href = 'https://mail.google.com/mail'}
                            >
                                <img
                                    src="/assets/reels/email.svg"
                                    alt="이메일"
                                    className="w-5 h-5"
                                />
                            </button>
                            <p className="text-xs mt-2">Email</p>
                        </div>
                        <div className="flex flex-col items-center mr-6">
                            <button
                                className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center"
                                onClick={() => window.location.href = 'https://www.threads.net/login?hl=ko'}
                            >
                                <img
                                    src="/assets/reels/threads.svg"
                                    alt="스레드"
                                    className="w-5 h-5"
                                />
                            </button>
                            <p className="text-xs mt-2">Threads</p>
                        </div>
                        <div className="flex flex-col items-center mr-6">
                            <button
                                className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center"
                                onClick={() => window.location.href = 'https://x.com/intent/post?text=%40vkvkvk_11%EB%8B%98%EC%9D%98+%EC%9D%B4+Instagram+%EA%B2%8C%EC%8B%9C%EB%AC%BC+%EB%B3%B4%EA%B8%B0&url=https%3A%2F%2Fwww.instagram.com%2Freel%2FDEAU-H-T7Ff%2F%3Figsh%3DY2Q0NmNiMjc3NQ%3D%3D'}
                            >
                                <img
                                    src="/assets/reels/x.svg"
                                    alt="x"
                                    className="w-5 h-5"
                                />
                            </button>
                            <p className="text-xs mt-2">X</p>
                        </div>
                        <div className="flex flex-col items-center mr-6">
                            <button className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center">
                                <img
                                    src="/assets/reels/share.svg"
                                    alt="모두보기"
                                    className="w-4 h-4"
                                />
                            </button>
                            <p className="text-xs mt-2">모두보기</p>
                        </div>
                    </div>

                    <button
                        className="font-bold text-white p-2 w-7 h-7 rounded-full bg-gray-600 bg-opacity-70 flex justify-center items-center absolute top-1/2 right-2 transform -translate-y-1/2 z-10"
                        onClick={handleNext}
                    >
                        ＞
                    </button>
                </div>

            </div>
        </div>
    );
};

ReelsShare.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ReelsShare;
