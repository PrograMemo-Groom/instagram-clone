import React from 'react';
import login_img from "@/assets/login/login-img.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgConfig from "@/components/login/imgConfig.js";
import LoginForm from "@/components/login/LoginForm.jsx";
import facebookLogo from "@/assets/login/facebook.svg";
import {useNavigate} from "react-router-dom";
import MoreBox from "@/components/login/MoreBox.jsx";

const LoginPage = () => {
    const settings = {
        dots: false, // 하단에 네비게이션 점 표시
        infinite: true, // 무한 루프 슬라이드
        speed: 500, // 슬라이드 전환 속도 (ms)
        slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
        autoplay: true, // 자동 재생
        autoplaySpeed: 1000, // 자동 재생 속도 (ms)
        arrows: false // 좌우 화살표 표시
    }
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center">
            <section className="flex flex-row items-center justify-center h-[450px]">
                <div className="relative flex-col items-center justify-center hidden sm:flex mr-4">
                    <img src={login_img} alt="login_img"/>
                    <div
                        className="absolute left-[90px] top-[20px] w-[190px] h-[415px] rounded-2xl object-contain overflow-hidden bg-black">
                        <Slider {...settings} >
                            {imgConfig.map(({id, img}) => (
                                <img key={`slide-${id}`} className="h-[415px]" src={img} alt={`slide ${id}`}/>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="border-2 flex flex-col items-center w-[300px] h-[360px]">
                        <div className="flex flex-col items-center justify-center mt-4 mb-4">
                            <img className="w-[160px] m-4" src="/img/icons/instagram_text_logo.png"
                                 alt="instagramlogo"/>
                        </div>
                        <LoginForm/>
                        <MoreBox margin="5px" width="100px" contentWidth="250px"/>
                        <button
                            className="flex flex-row items-center gap-2 text-[13px] text-sky-500 font-semibold mb-4">
                            <img src={facebookLogo} alt="facebooklogo"/>Facebook으로 로그인
                        </button>
                        <button className="text-[13px] mb-4" onClick={() => navigate("/account/password")}>비밀번호를
                            잊으셨나요?
                        </button>
                    </div>
                    <div className="border-2 flex justify-center items-center w-[300px] h-[50px] mt-2">
                        <div className="text-[13px] select-none">계정이 없으신가요? <span
                            className="text-sky-500 font-semibold cursor-pointer"
                            onClick={() => navigate("/account/join")}>가입하기</span></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
