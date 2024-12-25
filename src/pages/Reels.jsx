import React from 'react';

const Reels = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative w-[440px] h-[780px] bg-gray-300 rounded  overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="flex items-center">
                        <img
                            src=""
                            alt="Profile"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="ml-3">
                            <p className="font-bold text-white text-sm">사용자 id</p>
                        </div>
                        <div className="ml-3">
                            <p className="text-white"> • </p>
                        </div>
                        <div className="ml-3">
                            <button className="font-bold text-white text-sm border rounded-lg px-1.5 py-1">팔로우</button>
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className="text-sm text-white">내용</p>
                    </div>

                    <div className="mt-3 flex items-center bg-gray-500 bg-opacity-50 p-2 rounded-3xl">
                        <div className="text-white text-sm">
                            노래노래
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-2/4 right-[19%] space-y-6">
                <div className="flex flex-col items-center">
                    <button className="text-2xl">❤️</button>
                    <p className="text-xs">5.8만</p>
                </div>

                <div className="flex flex-col items-center">
                    <button className="text-2xl">💬</button>
                    <p className="text-xs">223</p>
                </div>

                <div className="flex flex-col items-center">
                    <button className="text-2xl">✈️</button>
                </div>

                <div className="flex flex-col items-center">
                    <button className="text-2xl">🔗</button>
                </div>

                <div className="flex flex-col items-center">
                    <button className="text-2xl">🔗</button>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src=""
                        alt="Profile"
                        className="mt-5 w-7 h-7 rounded "
                    />
                </div>
            </div>


        </div>
    );
};

export default Reels;