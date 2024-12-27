import React from 'react';

const InputBox = ({
                      inputValue = "",
                      setInputValue,
                      id = "",
                      isValid = "true",
                      errorMessage = "",
                      type,
                      label,
                      children
                  }) => {
    return (
        <label
            className={`flex flex-col relative w-[250px] border border-gray-500 mb-2 ${isValid ? "" : "border-red-500"}`}
            htmlFor={id}>
            <span
                className={`absolute text-gray-500 font-thin text-[8px] ml-1 mt-1 ${inputValue.trim().length === 0 ? "hidden" : ""} select-none`}>{label}</span>
            <input
                className={`outline-0 w-full h-[30px] pl-1 text-[10px] bg-gray-50 ${inputValue.trim().length === 0 ? "" : "pt-3"}`}
                type={type} id={id} placeholder={label}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {!isValid && errorMessage && (
                <p className="text-red-500 text-[10px] mt-1 pl-1">{errorMessage}</p>
            )}
            {children && children}
        </label>
    );
};

export default InputBox;
