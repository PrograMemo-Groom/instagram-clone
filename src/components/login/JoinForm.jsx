import React from 'react';
import InputBox from "@/components/login/InputBox.jsx";
import {setJoinUser, toggleShowPassword} from "@/store/action/UserAction.js";
import unShowPasswordImg from "@/assets/login/unShowPassword.svg";
import showPasswordImg from "@/assets/login/showPassword.svg";
import {useDispatch, useSelector} from "react-redux";
import SubmitButton from "@/components/login/SubmitButton.jsx";
import {getDuplicateUser, joinUserInfo} from "@/api/firebase/FirebaseUtils.js";
import {setIsLoading} from "@/store/action/CommonAction.js";

const JoinForm = () => {

    const {showPassword} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [userId, setUserId] = React.useState("");
    const [userPwd, setUserPwd] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [userRealName, setUserRealName] = React.useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            id: userId,
            password: userPwd,
            name: userName,
            realName: userRealName,
        }
        dispatch(setJoinUser(newUser));
        try {
            dispatch(setIsLoading(true));
            const {success, userData, messages} = await getUserInfo();
            if (success) {
                await joinUserInfo(newUser);
            } else {
                console.log("userData: ", userData);
                console.log("messages: ", messages);
            }
        } catch (e) {
            console.log(e.message);
        } finally {
            dispatch(setIsLoading(false));
        }
    }

    const getUserInfo = async () => {
        try {
            return await getDuplicateUser(userName, userId);
        } catch (e) {
            console.log(e.message);
        }
    }

    const handleOpenInstagramPage = () => {
        window.open(
            "https://www.facebook.com/help/instagram/261704639352628",
            "_blank",
            // "width=800,height=600,scrollbars=yes,resizable=yes"
        )
    }
    return (
        <form className="flex flex-col items-center justify-center w-[250px]" onSubmit={handleFormSubmit}>
            <InputBox inputValue={userId} id="userId" setInputValue={setUserId} type="text"
                      label="휴대폰 번호 또는 이메일 주소"/>
            <InputBox inputValue={userPwd} id="userPw" setInputValue={setUserPwd}
                      type={showPassword ? "text" : "password"} label="비밀번호">
                {userPwd.trim().length > 0 &&
                    <span className="absolute right-2 top-1 cursor-pointer"
                          onClick={() => dispatch(toggleShowPassword())}>
                        {userPwd.trim().length > 0 && (showPassword
                            ? <img src={unShowPasswordImg} alt="눈"/>
                            : <img src={showPasswordImg} alt="눈"/>)
                        }
                    </span>
                }
            </InputBox>
            <InputBox inputValue={userRealName} id="userRealName" setInputValue={setUserRealName} type="text"
                      label="성명"/>
            <InputBox inputValue={userName} id="userName" setInputValue={setUserName} type="text"
                      label="사용자 이름"/>
            <p className="text-center text-[10px] mb-4 mt-2 text-gray-500">저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
                업로드했을 수도 있습니다.
                <span className="font-bold cursor-pointer text-black"
                      onClick={() => handleOpenInstagramPage()}> 더 알아보기</span></p>
            <SubmitButton text="가입" userId={userId} userPw={userPwd} userName={userName} userRealName={userRealName}
                          addCss="mb-8"/>
        </form>
    );
};

export default JoinForm;
