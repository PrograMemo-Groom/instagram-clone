// import React from 'react';

const MainPage = () => {
    return (
        // 메인 - (스토리, 포스트) / 오른쪽 사이드바) 
        <main className="flex">
            <section className="w-[630px]"
            style={{backgroundColor:"lightblue"}}> 
                왼쪽 섹션 
                <p>이다</p>
            </section>
            <aside className="w-[319px] ml-[64px] hidden rightbarpoint:block" 
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
