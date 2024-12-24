import React from 'react';

const ProfilePage = () => {
    return (
        <div className="flex align-middle justify-center w-full bg-black h-full p-4 text-white">
            <div className=" rounded-full w-[155px] h-[155px] bg-amber-100 overflow-hidden">
                <img className="w-full h-full object-cover" alt="프로필 이미지" src="assets/image/winter.jpg"/>
            </div>
            <div className="flex-col">
                <div className="flex align-middle">
                    <span>winter_aespaera</span>
                    <button className=""></button>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;