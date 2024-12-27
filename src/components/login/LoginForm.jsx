import React, {useState} from 'react';
import {setUserLogin, toggleShowPassword} from "@/store/action/UserAction.js";
import unShowPasswordImg from "@/assets/login/unShowPassword.svg";
import showPasswordImg from "@/assets/login/showPassword.svg";
import {useDispatch, useSelector} from "react-redux";
import SubmitButton from "@/components/login/SubmitButton.jsx";
import InputBox from "@/components/login/InputBox.jsx";

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
            <InputBox inputValue={userIdInputValue} id="userId" setInputValue={setUserIdInputValue} type="text"
                      label="전화번호, 사용자 이름 또는 이메일"/>
            <InputBox inputValue={userPwInputValue} id="userPw" setInputValue={setUserPwInputValue}
                      type={showPassword ? "text" : "password"} label="비밀번호">
                {userPwInputValue.trim().length > 0 &&
                    <span className="absolute right-2 top-1 cursor-pointer"
                          onClick={() => dispatch(toggleShowPassword())}>
                        {userPwInputValue.trim().length > 0 && (showPassword
                            ? <img src={unShowPasswordImg} alt="눈"/>
                            : <img src={showPasswordImg} alt="눈"/>)
                        }
                    </span>
                }
            </InputBox>
            <SubmitButton text="로그인" userId={userIdInputValue} userPw={userPwInputValue}/>
        </form>
    );
};

export default LoginForm;
