// import React from 'react';
import StoryContainer from "./StoryContainer";
const MainPage = () => {
    return (
        // 메인 - (스토리, 포스트) / 오른쪽 사이드바) 
        <main className="flex">
            <section className="w-[630px] mt-[16px]"
            style={{backgroundColor:"lightblue"}}> 
               <StoryContainer/>
               <p>이다</p>
               <p>d</p>
            </section>
            <aside className="w-[319px] ml-[64px] mt-[36px] hidden rightbarpoint:block" 
            style={{backgroundColor:"pink"}}>
                오른쪽 사이드바
                <footer>
                    푸터
                </footer>
            </aside>
        </main>
    );
};

export default MainPage;
