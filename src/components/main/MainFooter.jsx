const MainPage = () => {
    return (
        <footer className="text-[12px] text-[#C7C7C7]"
            style={{ backgroundColor: "white" }}>
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

    );
};

export default MainPage;
