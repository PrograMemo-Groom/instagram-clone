import React from 'react';

const UserSection = () => {
    return (
        <div className="flex items-center justify-start w-full bg-black h-[198px] p-4 text-white">
            <div className="w-[280px] h-[155px] bg-black flex justify-center items-center">
                <div
                    className="w-[155px] h-[155px] rounded-full border-4 border-pink-300 flex justify-center items-center">
                    <img
                        className="w-[145px] h-[145px] rounded-full p-1"
                        alt="프로필 이미지"
                        src="assets/image/winter.jpg"
                    />
                </div>
            </div>


            <div className="flex flex-col text-xs h-full justify-evenly mr-auto">
                <div className="gap-2 flex items-center">
                    <span className="pt-2 pb-2 h-full font-bold text-[20px]">winter_aespaera</span>
                    <button className="pl-3 pr-3 pt-1 pb-1 bg-blue-600 hover:bg-blue-800 0 rounded ">팔로우</button>
                    <button className="pl-3 pr-3 pt-1 pb-1 bg-gray-700 hover:bg-gray-800 rounded">
                        <svg aria-label="비슷한 계정" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor"
                             height="16"
                             role="img" viewBox="0 0 24 24" width="16"><title>비슷한 계정</title>
                            <path d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z" fill="none"
                                  stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                            <path
                                d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447"
                                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"></path>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                  stroke-width="2" x1="5.001" x2="5.001" y1="7.998" y2="14.003"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                  stroke-width="2" x1="8.004" x2="2.003" y1="11" y2="11"></line>
                        </svg>
                    </button>
                    <button>
                        <svg aria-label="옵션" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="32"
                             role="img" viewBox="0 0 24 24" width="32"><title>옵션</title>
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="6" cy="12" r="1.5"></circle>
                            <circle cx="18" cy="12" r="1.5"></circle>
                        </svg>
                    </button>
                </div>
                <div className="flex w-full justify-between font-bold">
                    <span>게시물 {1904}</span>
                    <span>팔로워 {9972}</span>
                    <span>팔로우 {77}</span>
                </div>
                <span className="font-bold">WINTER (윈터)</span>
                <span className="w-2/3">@imwinter ~ ☆ 2001.01.01
                        kim minjeong l 윈터 에스파 ♡
                    </span>
            </div>
        </div>
    );
};

export default UserSection;