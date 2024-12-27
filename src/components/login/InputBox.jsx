import React from 'react';

const InputBox = ({inputValue = "", setInputValue, id = "", type, label, children}) => {
    return (
        <label className="flex flex-col relative w-[250px] border border-gray-500 mb-2" htmlFor={id}>
            <span
                className={`absolute text-gray-500 font-thin text-[8px] ml-1 mt-1 ${inputValue.trim().length === 0 ? "hidden" : ""} select-none`}>{label}</span>
            <input
                className={`outline-0 w-full h-[30px] pl-1 text-[10px] ${inputValue.trim().length === 0 ? "" : "pt-3"}`}
                type={type} id={id} placeholder={label}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {children && children}
        </label>
    );
};

export default InputBox;
