// import React from 'react';
import StoryContainer from "./StoryContainer";
import PostContainer from "./PostContainer";
import RecmndProfile from "./RecmndProfile";
import MyProfile from "./MyProfile";
import Footer from "../../components/main/MainFooter";
const MainPage = () => {
    return (
        // 메인 - (스토리, 포스트) / 오른쪽 사이드바) 
        <main className="flex">
            <section className="w-[630px] mt-[16px]"> 
               <StoryContainer/>
               <PostContainer/>
            </section>
            <aside className="w-[335px] ml-[64px] mt-[30px] px-[16px] hidden rightbarpoint:block">
                <MyProfile/>

                <div className="flex justify-between font-bold px-[4px] py-[8px]">
                    <span className="text-[14px] text-[#737373]">회원님을 위한 추천</span>
                    <span className="text-[12px]">모두 보기</span>
                </div>

                <RecmndProfile/>
                <RecmndProfile/>
                <RecmndProfile/>
                <RecmndProfile/>
                <RecmndProfile/>

                <Footer/>
            </aside>
        </main>
    );
};

export default MainPage;
