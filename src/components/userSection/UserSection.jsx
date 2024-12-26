// import React from 'react';
import data from './data.json'
import {useDispatch, useSelector} from "react-redux";
import {setIsDark} from "@/store/action/MainAction.js";
import {setIsFollowed, setModalIsOepn} from "@/store/action/ProfilePageAction.js";
import MoreModal from "@/components/userSection/MoreModal.jsx";

const UserSection = () => {
    const { isDark } = useSelector((state) => state.main);
    const { modalIsOpen, isFollowed } = useSelector((state) => state.profile)
    const dispatch = useDispatch();

    const toggleTheme = () => {
        const root = document.documentElement;

        dispatch(setIsDark(!isDark)); // isDark 반전
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    };

    const toggleModal = () => {
        dispatch(setModalIsOepn(!modalIsOpen));
    }

    const toggleFollowed = () => {
        dispatch(setIsFollowed(!isFollowed))
        console.log("isFollowed : ", isFollowed);
    }


    return (
        <div
            className="bg-white text-black dark:bg-black dark:text-white flex items-center justify-items-center w-full  h-[198px] p-4 ">
            <button onClick={toggleTheme}>버튼</button>
            <div className="w-[280px] h-[155px] flex justify-center items-center">
                <div
                    className="w-[155px] h-[155px] rounded-full border-4 border-pink-300 flex justify-center items-center">
                    <img
                        className="w-[145px] h-[145px] rounded-full p-1"
                        alt="프로필 이미지"
                        src={data.profileImage}
                    />
                </div>
            </div>
            <div className="flex flex-col text-xs h-full justify-evenly">
                <div className="gap-2 flex items-center flex-shrink">
                    <span className="pt-2 pb-2 h-full font-bold text-[20px]">{data.username}</span>

                    <button
                        onClick={toggleFollowed}
                        className={`pl-3 pr-3 pt-1 pb-1 rounded text-white whitespace-nowrap ${
                            isFollowed
                                ? "bg-gray-500 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-800"
                                : "bg-blue-500 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-800"
                        }`}>
                        {isFollowed ? "팔로잉" : "팔로우"}
                    </button>
                    {isFollowed && (
                        <button
                            className="ml-3 pl-3 pr-3 pt-1 pb-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white rounded border border-gray-300 dark:border-gray-500 whitespace-nowrap">
                            메시지 보내기
                        </button>
                    )}



                    <button
                        className="bg-gray-200 hover:bg-gray-400 pl-3 pr-3 pt-1 pb-1 dark:bg-gray-700 dark:hover:bg-gray-800 rounded">
                        <svg
                            aria-label="비슷한 계정"
                            className="x1lliihq x1n2onr6 x5n08af"
                            fill="currentColor"
                            height="16"
                            role="img"
                            viewBox="0 0 24 24"
                            width="16"
                        >
                            <title>비슷한 계정</title>
                            <path
                                d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z"
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            ></path>
                            <path
                                d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            ></path>
                            <line
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                x1="5.001"
                                x2="5.001"
                                y1="7.998"
                                y2="14.003"
                            ></line>
                            <line
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                x1="8.004"
                                x2="2.003"
                                y1="11"
                                y2="11"
                            ></line>
                        </svg>

                    </button>
                    <button onClick={toggleModal}>
                        <svg aria-label="옵션" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="32"
                             role="img" viewBox="0 0 24 24" width="32"><title>옵션</title>
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="6" cy="12" r="1.5"></circle>
                            <circle cx="18" cy="12" r="1.5"></circle>
                        </svg>
                    </button>
                    {modalIsOpen && <MoreModal />}
                </div>
                <div className="flex w-full justify-start font-bold gap-x-8">
                    <span>게시물 {data.posts}</span>
                    <span>팔로워 {data.followers}</span>
                    <span>팔로우 {data.following}</span>
                </div>
                <span className="font-bold">{data.fullName}</span>
                <span className="w-[230px]">{data.bio}</span>
            </div>
        </div>);
};

export default UserSection;