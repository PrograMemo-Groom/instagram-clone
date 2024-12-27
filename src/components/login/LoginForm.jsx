import React, {useState} from 'react';
import {setUserLogin, toggleShowPassword} from "@/store/action/UserAction.js";
import unShowPasswordImg from "@/assets/login/unShowPassword.svg";
import showPasswordImg from "@/assets/login/showPassword.svg";
import {useDispatch, useSelector} from "react-redux";

const LoginForm = () => {
    const {user, showPassword} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [userIdInputValue, setUserIdInputValue] = useState("");
    const [userPwInputValue, setUserPwInputValue] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(userIdInputValue, userPwInputValue);
        dispatch(setUserLogin({id: userIdInputValue, password: userPwInputValue}));
        console.log("user:", user.id, user.password);
    }

    return (
        <form className="flex flex-col items-center justify-center w-[250px]" onSubmit={handleFormSubmit}>
            <label className="flex flex-col relative w-[250px] border border-gray-500 mb-2" htmlFor="userId">
                <span
                    className={`absolute text-gray-500 font-thin text-[8px] ml-1 mt-1 ${userIdInputValue.trim().length === 0 ? "hidden" : ""} select-none`}>전화번호, 사용자 이름 또는 이메일</span>
                <input
                    className={`outline-0 w-full h-[30px] pl-1 text-[10px] ${userIdInputValue.trim().length === 0 ? "" : "pt-3"}`}
                    type="text" id="userId" placeholder="전화번호, 사용자 이름 또는 이메일"
                    value={userIdInputValue}
                    onChange={(e) => setUserIdInputValue(e.target.value)}
                />
            </label>
            <label className="flex flex-col relative w-[250px] border border-gray-500 mb-4" htmlFor="userpw">
                <span
                    className={`absolute text-gray-500 font-thin text-[8px] ml-1 mt-1 ${userPwInputValue.trim().length === 0 ? "hidden" : ""} select-none`}>비밀번호</span>
                <input
                    className={`outline-0 border-black w-full h-[30px] pl-1 text-[10px] ${userPwInputValue.trim().length === 0 ? "" : "pt-3"}`}
                    type={showPassword ? "text" : "password"} id="userpw" placeholder="비밀번호"
                    value={userPwInputValue}
                    onChange={(e) => setUserPwInputValue(e.target.value)}
                />
                <span className="absolute right-2 top-1 cursor-pointer" onClick={() => dispatch(toggleShowPassword())}>
                    {userPwInputValue.trim().length > 0 && (showPassword
                        ? <img src={unShowPasswordImg} alt="눈"/>
                        : <img src={showPasswordImg} alt="눈"/>)
                    }
                </span>
            </label>
            <button type="submit"
                    className=" w-[250px] h-[30px] rounded-[5px] border bg-sky-500 hover:bg-blue-500 disabled:bg-sky-400 border-gray-200 disabled:border-gray-200 text-white text-[14px] font-semibold"
                    disabled={userIdInputValue.trim().length === 0 || userPwInputValue.trim().length === 0 || userPwInputValue.trim().length < 6}
            >로그인
            </button>
        </form>
    );
};

export default LoginForm;
