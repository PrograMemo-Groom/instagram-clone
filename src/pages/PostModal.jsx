import {useRef, useState} from "react";

const PostModal = () => {
    const [pageIndex, setPageIndex] = useState(0); // 현재 페이지 인덱스
    const fileInputRef = useRef(null);
    const [content, setContent] = useState("");

    const handleButtonClick = () => {
        fileInputRef.current.click(); // 버튼 클릭 시 input을 실행
    };

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles.length > 0) {
            const file = selectedFiles[0];
            console.log("Selected file:", file);
            // 파일 URL을 생성하여 미리보기
            const fileURL = URL.createObjectURL(file);
            setContent(fileURL); // 선택한 이미지 URL을 상태에 저장
            handleNext();
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const tempImagePath = URL.createObjectURL(file);
            setContent(tempImagePath);
            handleNext(); // 드래그 후 페이지 전환
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // 기본 드래그 오버 동작 방지
    };

    const filterData = [
        {id: 1, image: "/img/pochaco.jpg", description: "필터 1"},
        {id: 2, image: "/img/pochaco.jpg", description: "필터 2"},
        {id: 3, image: "/img/pochaco.jpg", description: "필터 3"},
        {id: 4, image: "/img/pochaco.jpg", description: "필터 4"},
        {id: 5, image: "/img/pochaco.jpg", description: "필터 5"},
        {id: 6, image: "/img/pochaco.jpg", description: "필터 6"},
    ];

    const pages = [
        {
            title: "새 게시물 만들기",
            content: (
                <div
                    className="flex-grow flex flex-col items-center justify-center space-y-3 border-1 "
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <img
                        className="h-40 w-40 object-contain"
                        src="assets/icon/selectImg.svg"
                        alt="이미지 선택"
                    />
                    <p className="text-black">사진과 동영상을 여기다 끌어다 놓으세요</p>
                    <button
                        onClick={() => handleButtonClick()}
                        className="px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-500"
                    >
                        컴퓨터에서 선택
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*, video/*"
                        multiple
                        className="hidden"
                        onChange={(e) => handleFileChange(e)}
                    />
                </div>
            ),
        },
        {
            title: "자르기",
            content: (
                <div className="flex items-center justify-center">
                    <img src={content}/>
                </div>
            ),
        },
        {
            title: "편집",
            content: (
                <div className="flex flex-wrap">
                    {/* 좌측 이미지 영역 */}
                    <div className="w-full max-w-[855px] h-full flex-shrink-0">
                        <img
                            src={content}
                            alt="이미지"
                            className="w-full h-full object-cover md:aspect-[1/1] xl:aspect-[1/1]"
                        />
                    </div>

                    {/* 우측 편집 영역 */}
                    <div className="w-full md:w-full lg:w-[340px] h-full border-l-2 flex-shrink-0">
                        {/* 버튼 */}
                        <div className="w-full flex mb-4 border-b-2">
                            <button className="py-1 text-black border-r-2 w-1/2">
                                필터
                            </button>
                            <button className="py-1 text-black w-1/2">
                                조정
                            </button>
                        </div>

                        <div className="w-full grid grid-cols-3 gap-4 p-2">
                            {filterData.map(item => (
                                <div key={item.id} className="flex flex-col items-center">
                                    <img
                                        src={item.image}
                                        alt={item.description}
                                        className="w-24 h-24 object-contain mb-2 border-2"
                                    />
                                    <p className="text-black">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            ),
        },
        {
            title: "새 게시물 만들기",
            content: (
                <div className="flex-grow flex items-center justify-center">
                    <p className="text-black">최종 게시물 작성 페이지입니다.</p>
                </div>
            ),
        },
    ];

    const handleNext = () => {
        if (pageIndex < pages.length - 1) {
            setPageIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (pageIndex > 0) {
            setPageIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className="flex flex-col bg-white rounded-lg shadow-lg min-h-[60%] h-fit  min-w-[60%] w-[1200px]">

                {/* 상단 */}
                <h2 className="flex justify-between items-center border-b-2 p-2 font-bold">
                    {pageIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="px-2 py-1 rounded bg-blue-400 text-white hover:bg-blue-500"
                        >
                            이전
                        </button>
                    )}
                    {/* 모달 제목 중앙에 위치 */}
                    <span className="flex-grow text-center">{pages[pageIndex].title}</span>
                    {pageIndex > 0 && pageIndex < pages.length - 1 && (
                        <button
                            onClick={handleNext}
                            className="px-2 py-1 rounded bg-blue-400 text-white hover:bg-blue-500"
                        >
                            다음
                        </button>
                    )}
                    {pageIndex === pages.length - 1 && (
                        <button
                            onClick={() => console.log("게시물 공유")}
                            className="px-4 py-1 rounded bg-green-500 text-white hover:bg-green-600"
                        >
                            공유하기
                        </button>
                    )}
                </h2>

                {/* 현재 페이지 콘텐츠 */}
                {pages[pageIndex].content}
            </div>
        </div>
    );
};

export default PostModal;
