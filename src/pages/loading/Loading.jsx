import React from 'react';
import logo from "@/assets/instagram1024.png";

const Loading = () => {
    return (
        <div className="inline-flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center w-[50px] h-[calc(100vh-30px)] margin-auto">
                <img className="w-[50px] h-[50px]" src={logo} alt="instagram logo"/>
            </div>
            <p className="h-[30px]">Loading...</p>
        </div>
    );
};

export default Loading;
