import React from 'react';

const MoreBox = () => {
    return (
        <div className={`flex flex-row w-[250px] mt-4 mb-4`}>
            <div className={`flex ml-[5px] mr-[5px] w-[100px] h-[12px] border-b border-b-gray-500`}/>
            <div className={`flex w-[30px] text-[13px] justify-center`}>또는</div>
            <div className={`flex ml-[5px] mr-[5px] w-[100px] h-[12px] border-b border-b-gray-500`}/>
        </div>
    );
};

export default MoreBox;
