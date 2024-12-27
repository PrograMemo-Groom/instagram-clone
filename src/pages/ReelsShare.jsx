import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ReelsShare = ({ onClose }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleCancel = () => {
        setIsFocused(false);
    };

    const handleNext = () => {
        const scrollContainer = document.getElementById("share-scroll-container");
        if (scrollContainer) {
            const scrollAmount = scrollContainer.clientWidth; // Amount to scroll equals container width
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            const newScrollPosition = Math.min(scrollContainer.scrollLeft + scrollAmount, maxScrollLeft);
            scrollContainer.scrollTo({ left: newScrollPosition, behavior: "smooth" });
            updateScrollButtons(newScrollPosition, maxScrollLeft);
        }
    };

    const handlePrev = () => {
        const scrollContainer = document.getElementById("share-scroll-container");
        if (scrollContainer) {
            const scrollAmount = scrollContainer.clientWidth; // Amount to scroll equals container width
            const newScrollPosition = Math.max(scrollContainer.scrollLeft - scrollAmount, 0);
            scrollContainer.scrollTo({ left: newScrollPosition, behavior: "smooth" });
            updateScrollButtons(newScrollPosition, scrollContainer.scrollWidth - scrollContainer.clientWidth);
        }
    };

    const updateScrollButtons = (currentPosition, maxScrollLeft) => {
        setCanScrollLeft(currentPosition > 0);
        setCanScrollRight(currentPosition < maxScrollLeft);
    };

    useEffect(() => {
        const scrollContainer = document.getElementById("share-scroll-container");
        if (scrollContainer) {
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            updateScrollButtons(scrollContainer.scrollLeft, maxScrollLeft);
        }
    }, []);

    const handleUserClick = (index) => {
        if (selectedUsers.includes(index)) {
            setSelectedUsers(selectedUsers.filter((userIndex) => userIndex !== index));
        } else {
            setSelectedUsers([...selectedUsers, index]);
        }
    };

    const shareItems = [
        { src: "/assets/reels/link.svg", alt: "링크복사", label: "링크 복사", link: "#" },
        { src: "/assets/reels/facebook.svg", alt: "페이스북", label: "Facebook", link: "https://www.facebook.com/sharer/sharer.php?app_id=1217981644879628&u=https%3A%2F%2Fwww.instagram.com%2Freel%2FDEAU-H-T7Ff%2F%3Figsh%3DMjAyZTYwOWFjOA%3D%3D" },
        { src: "/assets/reels/messenger.svg", alt: "메신저", label: "Messenger", link: "https://www.facebook.com/login.php?api_key=1217981644879628&skip_api_login=1&display=page&cancel_url=https%3A%2F%2Fwww.instagram.com%2Freel%2FDEAU-H-T7Ff%2F%3Figsh%3DM2ViY2RjMDFkMA%3D%3D&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fsend%3F_path%3Dsend%26app_id%3D1217981644879628%26client_id%3D1217981644879628%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Freel%252FDEAU-H-T7Ff%252F%253Figsh%253DM2ViY2RjMDFkMA%253D%253D%26display%3Dpage%26link%3Dhttps%253A%252F%252Fwww.instagram.com%252Freel%252FDEAU-H-T7Ff%252F%253Figsh%253DM2ViY2RjMDFkMA%253D%253D%26from_login%3D1" },
        { src: "/assets/reels/whatsapp.svg", alt: "whatsApp", label: "WhatsApp", link: "https://api.whatsapp.com/send/?text=%40vkvkvk_11%EB%8B%98%EC%9D%98+%EC%9D%B4+Instagram+%EA%B2%8C%EC%8B%9C%EB%AC%BC+%EB%B3%B4%EA%B8%B0%3A+https%3A%2F%2Fwww.instagram.com%2Freel%2FDEAU-H-T7Ff%2F%3Figsh%3DYzAyMDM1MGJkZA%3D%3D&type=custom_url&app_absent=0" },
        { src: "/assets/reels/email.svg", alt: "이메일", label: "Email", link: "https://mail.google.com/mail" },
        { src: "/assets/reels/threads.svg", alt: "스레드", label: "Threads", link: "https://www.threads.net/login?hl=ko" },
        { src: "/assets/reels/x.svg", alt: "x", label: "X", link: "https://x.com/intent/post?text=%40vkvkvk_11%EB%8B%98%EC%9D%98+%EC%9D%B4+Instagram+%EA%B2%8C%EC%8B%9C%EB%AC%BC+%EB%B3%B4%EA%B8%B0&url=https%3A%2F%2Fwww.instagram.com%2Freel%2FDEAU-H-T7Ff%2F%3Figsh%3DY2Q0NmNiMjc3NQ%3D%3D" },
        { src: "/assets/reels/share.svg", alt: "모두보기", label: "모두보기", link: "#" },
    ];

    const users = Array.from({ length: 12 }, (_, i) => ({
        src: "/assets/reels/reels_profile.png",
        alt: `프로필 ${i + 1}`,
        label: `사용자${i + 1}`,
        username: `username${i + 1}`,
    }));

    const getButtonLabel = () => {
        return selectedUsers.length > 1 ? "따로 보내기" : "보내기";
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-[100%] sm:max-w-[550px] rounded-lg shadow-lg mx-4">
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
                        <div className="flex text-black w-[550px] px-3 py-2 rounded-lg bg-gray-100">
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

                <div className="overflow-y-auto max-h-[300px] px-4 py-2">
                    {isFocused ? (
                        <ul className="space-y-4">
                            {users.map((user, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-between"
                                    onClick={() => handleUserClick(index)}
                                >
                                    <div className="flex items-center">
                                        <img
                                            src={user.src}
                                            alt={user.alt}
                                            className="w-10 h-10 rounded-full mr-4"
                                        />
                                        <div>
                                            <p className="text-sm font-medium">{user.label}</p>
                                            <p className="text-xs text-gray-500">{user.username}</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`w-5 h-5 border-2 rounded-full border-gray-300}`}
                                    ></div>
                                </li>
                            ))}
                        </ul>
                    ) : (

                    <div
                        className="grid gap-8"
                        style={{
                            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                            maxWidth: "550px",
                            margin: "0 auto",
                        }}
                    >
                        {users.map((user, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center cursor-pointer ${selectedUsers.includes(index) ? 'ring-2 ring-gray-300' : ''}`}
                                onClick={() => handleUserClick(index)}
                            >
                                <div
                                    className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-2">
                                    <img
                                        src={user.src}
                                        alt={user.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs">{user.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    )}
                </div>

                {selectedUsers.length > 0 ? (
                    <div className="py-4 px-7 border-t">
                        <input
                            type="text"
                            placeholder="메시지 쓰기..."
                            className="w-full p-1 rounded mt-1 text-sm focus:outline-none focus:ring-0 placeholder-neutral-500"
                        />
                        <button className="bg-blue-500 text-white w-full py-1 rounded-lg mt-4 mb-3 text">
                            {getButtonLabel()}
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-center border-t py-4 px-5 relative">
                            {canScrollLeft && (
                                <button
                                    className="font-bold text-white p-2 w-7 h-7 rounded-full bg-gray-600 bg-opacity-70 flex justify-center items-center absolute top-1/2 left-2 transform -translate-y-1/2 z-10"
                                    onClick={handlePrev}
                                >
                                    ＜
                                </button>
                            )}

                            <div
                                id="share-scroll-container"
                                className="flex overflow-x-scroll gap-4 scrollbar-hide w-full"
                            >
                                {shareItems.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center mr-2">
                                        <button
                                            className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center"
                                            onClick={() => window.location.href = item.link}
                                        >
                                            <img src={item.src} alt={item.alt} className="w-5 h-5"/>
                                        </button>
                                        <p className="text-xs mt-2 mb-3">{item.label}</p>
                                    </div>
                                ))}
                            </div>

                            {canScrollRight && (
                                <button
                                    className="font-bold text-white p-2 w-7 h-7 rounded-full bg-gray-600 bg-opacity-70 flex justify-center items-center absolute top-1/2 right-2 transform -translate-y-1/2 z-10"
                                    onClick={handleNext}
                                >
                                    ＞
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

ReelsShare.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ReelsShare;