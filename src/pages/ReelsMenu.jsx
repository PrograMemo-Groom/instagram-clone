const ReelsMenu = () => {
    const menuItems = [
        {text: "신고", color: "text-red-500"},
        {text: "팔로우", color: "text-blue-500"},
        {text: "게시물로 이동"},
        {text: "공유 대상..."},
        {text: "링크 복사"},
        {text: "퍼가기"},
        {text: "이 계정 정보"},
    ];

    return (
        <div className="absolute top-[490px] left-[-150px] inset-0 z-50 w-[330px] flex justify-center items-center">

            <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-[350px] p-4">
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`mb-1 px-4 py-3 text-start text-sm cursor-pointer ${
                                item.color ? item.color : "text-black"
                            } hover:bg-gray-100`}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            );
            };

            export default ReelsMenu;