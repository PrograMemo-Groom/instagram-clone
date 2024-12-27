import React from 'react';
import login_img from "@/assets/login/login-img.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgConfig from "@/pages/login/imgConfig.js";

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

    return (
        <div className="flex flex-col items-center justify-center">
            <section className="flex flex-row items-center justify-center">
                <div className="relative flex flex-col items-center justify-center">
                    <img src={login_img} alt="logo"/>
                    <div
                        className="absolute left-[90px] top-[20px] w-[190px] h-[415px] rounded-2xl object-contain overflow-hidden bg-black">
                        <Slider {...settings} >
                            {imgConfig.map(({id, img}) => (
                                <img key={`slide-${id}`} className="h-[415px]" src={img} alt={`slide ${id}`}/>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div>아 슬라이드 개꿀띠</div>
            </section>
        </div>
    );
};

export default LoginPage;
