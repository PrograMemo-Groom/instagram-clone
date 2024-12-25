import React from 'react';
import logo from "@/assets/instagram1024.png";

const Loading = () => {
    return (
        <div className="inline-flex flex-col items-center justify-between min-h-[80px]">
            <div className="flex items-center justify-center w-[50px] h-[calc(100vh-50px)] mx-auto">
                <img className="w-[50px] h-[50px]" src={logo} alt="instagram logo"/>
            </div>
            <p className="text-xl h-[30px]">Loading...</p>
            <p className="text-xs h-[10px]"></p>
        </div>
    );
};

export default Loading;
