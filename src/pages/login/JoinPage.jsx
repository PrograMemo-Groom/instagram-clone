import React from 'react';
import MoreBox from "@/components/login/MoreBox.jsx";
import facebookLogo from "@/assets/login/facebook.svg";
import JoinForm from "@/components/login/JoinForm.jsx";
import SubmitButton from "@/components/login/SubmitButton.jsx";
import {useNavigate} from "react-router-dom";

const JoinPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center mb-2">
                <article className="border-2 flex flex-col items-center w-[300px] h-[520px] mt-4">
                    <div className="flex flex-col items-center justify-center mt-4">
                        <img className="w-[160px] m-4" src="/img/icons/instagram_text_logo.png"
                             alt="instagramlogo"/>
                    </div>
                    <p className="flex w-[250px] text-[14px] font-bold text-center mb-2">친구들의 사진과 동영상을 보려면 가입하세요.</p>
                    <SubmitButton addCss="flex flex-row gap-1 justify-center items-center"
                                  text={<><img src={facebookLogo} alt="facebooklogo"/>Facebook으로 로그인</>}/>
                    <MoreBox margin="5px" width="100px" contentWidth="250px"/>
                    <JoinForm/>
                </article>
                <article className="border-2 flex justify-center items-center w-[300px] h-[50px] mt-2">
                    <div className="text-[13px] select-none">계정이 없으신가요? <span
                        className="text-sky-500 font-semibold cursor-pointer"
                        onClick={() => navigate("/account")}>로그인</span></div>
                </article>
            </section>
        </div>
    );
}

export default JoinPage;
