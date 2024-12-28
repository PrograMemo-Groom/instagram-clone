import React from 'react';
import lock from "@/assets/login/lock.svg";
import SubmitButton from "@/components/login/SubmitButton.jsx";
import InputBox from "@/components/login/InputBox.jsx";
import MoreBox from "@/components/login/MoreBox.jsx";
import {useNavigate} from "react-router-dom";

const ForgetPasswordPage = () => {
    const [userId, setUserId] = React.useState("");
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center mb-2">
                <article className="border-2 flex flex-col items-center w-[350px] h-[520px] mt-4">
                    <div className="flex flex-col items-center justify-center mt-4">
                        <img className="w-[90px] m-4" src={lock}
                             alt="lock"/>
                    </div>
                    <p className="justify-center flex w-[250px] text-[16px] font-bold mb-2 text-center">로그인에 문제가
                        있나요?</p>
                    <p className="justify-center flex w-[250px] text-[14px] text-gray-400 mb-4 font-bold text-center">이메일
                        주소, 전화번호 또는 사용자 이름을 입력하시면 계정에 다시 액세스할 수 있는 링크를 보내드립니다.</p>
                    <form className="flex flex-col items-center justify-center w-[250px]" onSubmit={handleFormSubmit}>
                        <InputBox inputValue={userId} setInputValue={setUserId} type="text" label="이메일, 전화번호, 사용자이름"/>
                        <SubmitButton text={"로그인 링크 보내기"} addCss="mt-1 mb-1"/>
                    </form>
                    <p className="select-none justify-center mt-2 cursor-pointer flex w-[320px] text-[12px] text-gray-500 hover:text-gray-600 font-bold mb-2 text-center">비밀번호를
                        재설정할 수 없나요?</p>
                    <MoreBox/>
                    <button className="text-[14px] mb-4 font-extrabold hover:text-gray-500"
                            onClick={() => navigate("/account/join")}>새 계정 만들기
                    </button>
                </article>
                <article className="">
                    <button
                        className="border-t-0 border-2 flex justify-center items-center w-[350px] h-[50px] text-[14px] hover:text-gray-500 bg-gray-50 font-extrabold select-none"
                        onClick={() => navigate("/account")}>로그인으로 돌아가기
                    </button>
                </article>
            </section>
        </div>
    );
};

export default ForgetPasswordPage;
