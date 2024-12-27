// import React from 'react';

const MainPage = () => {
    return (
        // 메인 - (스토리, 포스트) / 오른쪽 사이드바) 
        <main>
            <section style={{backgroundColor:"lightblue"}}> 왼쪽 섹션 </section>
            <aside style={{backgroundColor:"pink"}}>
                오른쪽 사이드바
                <footer>
                    푸터
                </footer>
            </aside>
        </main>
    );
};

export default MainPage;
