import React from 'react';

const Reels = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[400px] h-[730px] bg-gray-300 rounded  overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="flex items-center">
                        <img
                            src=""
                            alt="Profile"
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="ml-3">
                            <p className="font-bold text-white">사용자 id</p>
                        </div>
                        <div className="ml-3">
                            <p className="text-white"> • </p>
                        </div>
                        <div className="ml-3">
                            <button className="text-white border rounded-lg px-2 py-1">팔로우</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reels;