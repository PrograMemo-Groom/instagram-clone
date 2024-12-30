// import React from 'react';
import StoryContainer from "./StoryContainer";
import PostContainer from "./PostContainer";
import RecmndProfile from "./RecmndProfile";
import MyProfile from "./MyProfile";
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

                <footer className="text-[12px] text-[#C7C7C7]"
                style={{backgroundColor:"white"}}>
                <ul className="flex flex-wrap py-[30px]">
                    <li className="after:content-['·'] after:mx-2 last:after:content-['']">소개</li>
                    <li className="after:content-['·'] after:mx-2 last:after:content-['']">도움말</li>
                    <li className="after:content-['·'] after:mx-2 last:after:content-['']">홍보 센터</li>
                    <li className="after:content-['·'] after:mx-2 last:after:content-['']">API</li>
                    <li className="after:content-['·'] after:mx-2 last:after:content-['']">채용 정보</li>
                    <li className="after:content-['·'] after:mx-2 last:after:content-['']">개인정보처리방침</li>
                    <li className="after:content-['·'] after:mx-2 last:after:content-['']">약관</li>
                    <li className="after:content-['·'] after:mx-2 last:after:content-['']">위치</li>
                    <li className="after:content-['·'] after:mx-2 last:after:content-['']">언어</li>
                    <li>Meta Verified</li>
                </ul>
                <p>© 2024 Instagram from Meta</p>
                </footer>
            </aside>
        </main>
    );
};

export default MainPage;
