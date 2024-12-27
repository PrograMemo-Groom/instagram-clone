import React from 'react';

const MoreBox = ({margin, width, contentWidth}) => {
    return (
        <div className={`flex flex-row w-[${contentWidth}] mt-4 mb-4`}>
            <div className={`flex ml-[${margin}] mr-[${margin}] w-[${width}] h-[12px] border-b border-b-gray-500`}/>
            <div className={`flex w-[${contentWidth - width * 2}] text-[13px] justify-center`}>또는</div>
            <div className={`flex ml-[${margin}] mr-[${margin}] w-[${width}] h-[12px] border-b border-b-gray-500`}/>
        </div>
    );
};

export default MoreBox;
