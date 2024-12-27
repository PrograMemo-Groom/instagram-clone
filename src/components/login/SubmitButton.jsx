import React from 'react';
import {validateFields} from "@/components/login/validateFields.js";

const SubmitButton = ({userId = "", userPw = "", userName = "", userRealName = "", text = ""}) => {
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
        <button type="submit"
                className=" w-[250px] h-[30px] rounded-[5px] border bg-sky-500 hover:bg-blue-500 disabled:bg-sky-400 border-gray-200 disabled:border-gray-200 text-white text-[14px] font-semibold"
                disabled={text === "로그인" ? isDisabledForLogin : isDisabledForJoin}
        >{text}
        </button>
    );
};

export default SubmitButton;
