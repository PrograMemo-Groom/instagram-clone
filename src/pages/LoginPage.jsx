import React from 'react';
import login_img from "@/assets/login/login-img.svg";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <section className="flex flex-row items-center justify-center">
                <div className="relative flex flex-col items-center justify-center">
                    <img src={login_img} alt="logo"/>
                    <div
                        className="absolute left-[90px] top-[20px] bg-white w-[190px] h-[415px] rounded-2xl object-cover">

                    </div>
                </div>
                <div>ss</div>
            </section>
        </div>
    );
};

export default LoginPage;
