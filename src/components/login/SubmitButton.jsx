import React from 'react';
import {validateFields} from "@/components/login/validateFields.js";

const SubmitButton = ({
                          userId = "",
                          userPw = "",
                          userName = "",
                          userRealName = "",
                          text = "",
                          addCss = "",
                          ...props
                      }) => {
    const type = text === "가입" || text === "로그인" ? "submit" : "text";
    const isDisabledForLogin = validateFields({
        userId: userId,
        userPw: userPw,
    });
    const isDisabledForJoin = validateFields({
        userId: userId,
        userPw: userPw,
        userName: userName,
        userRealName: userRealName
    });
    return (
        <button type={type}
                {...props}
                className={`${addCss} w-[250px] h-[30px] rounded-[5px] border bg-sky-500 hover:bg-blue-500 disabled:bg-sky-400 border-gray-200 disabled:border-gray-200 text-white text-[14px] font-semibold`}
                disabled={text === "로그인" ? isDisabledForLogin : text === "가입" ? isDisabledForJoin : ""}
        >{text}
        </button>
    );
};

export default SubmitButton;
