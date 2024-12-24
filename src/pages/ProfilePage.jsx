// import React from 'react';

const ProfilePage = () => {
    return (
        <div className="flex align-middle justify-center w-full bg-black h-full p-4 text-white">
            <div className=" rounded-full w-[155px] h-[155px] bg-amber-100 overflow-hidden">
                <img className="w-full h-full object-cover" alt="프로필 이미지" src="assets/image/winter.jpg"/>
            </div>
            <div className="flex-col text-xs">
                <div className="gap-2 flex items-center">
                    <span className="p-2 h-full">winter_aespaera</span>
                    <button className="p-1 bg-blue-600 rounded h-full">팔로우</button>
                    <button className="p-1 bg-gray-700 rounded h-full">
                        <svg aria-label="비슷한 계정" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16"
                             role="img" viewBox="0 0 24 24" width="16"><title>비슷한 계정</title>
                            <path d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z" fill="none"
                                  stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                            <path d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447"
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
                <div>게시문 1904 팔로워 9972</div>
                <div>WINTER (윈터)</div>
                <div>@imwinter ~ ☆ 2001.01.01
                    kim minjeong l 윈터 에스파 ♡
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;