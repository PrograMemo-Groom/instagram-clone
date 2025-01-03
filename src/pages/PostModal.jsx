import {useRef, useState} from "react";

const PostModal = () => {
    const [pageIndex, setPageIndex] = useState(0); // 현재 페이지 인덱스
    const fileInputRef = useRef(null);
    const [content, setContent] = useState("");
    const [text, setText] = useState(""); // 입력된 텍스트 상태

    const [isAccessibilityOpen, setAccessibilityOpen] = useState(false);
    const [isAdvancedSettingsOpen, setAdvancedSettingsOpen] = useState(false);

    const toggleAccessibilityDropdown = () => {
        // 다른 드롭다운 창이 열리면 닫히도록
        if(isAdvancedSettingsOpen) {
            setAdvancedSettingsOpen(!isAdvancedSettingsOpen);
        }
        setAccessibilityOpen(!isAccessibilityOpen);

    };

    const toggleAdvancedSettingsDropdown = () => {
        // 다른 드롭다운 창이 열리면 닫히도록
        if(isAccessibilityOpen) {
            setAccessibilityOpen(!isAccessibilityOpen);
        }
        setAdvancedSettingsOpen(!isAdvancedSettingsOpen);
    };

    const handleTextChange = (e) => {
        const inputText = e.target.value;
        // 입력된 텍스트가 최대 문자 수를 초과하지 않도록 제한
        if (inputText.length <= 2200) {
            setText(inputText);
        }
    };

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

    const filterData = [{id: 1, image: "/img/pochaco.jpg", description: "필터 1"}, {
        id: 2, image: "/img/pochaco.jpg", description: "필터 2"
    }, {id: 3, image: "/img/pochaco.jpg", description: "필터 3"}, {
        id: 4, image: "/img/pochaco.jpg", description: "필터 4"
    }, {id: 5, image: "/img/pochaco.jpg", description: "필터 5"}, {
        id: 6, image: "/img/pochaco.jpg", description: "필터 6"
    },];

    const pages = [{
        title: "새 게시물 만들기", content: (<div
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
        </div>),
    }, {
        title: "자르기", content: (<div className="flex items-center justify-center">
            <img src={content}
                 className="w-full h-full max-w-[855px] max-h-[855px]  object-cover md:aspect-[1/1] xl:aspect-[1/1]"/>
        </div>),
    }, {
        title: "편집", content: (<div className="flex flex-wrap">
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
                    {filterData.map(item => (<div key={item.id} className="flex flex-col items-center">
                        <img
                            src={item.image}
                            alt={item.description}
                            className="w-24 h-24 object-contain mb-2 border-2"
                        />
                        <p className="text-black">{item.description}</p>
                    </div>))}
                </div>
            </div>
        </div>),
    }, {
        title: "새 게시물 만들기", content: (<div className="flex">
                {/* 좌측 이미지 영역 */}
                <div className="w-full max-w-[855px] h-full flex-shrink-0">
                    <img
                        src={content}
                        alt="이미지"
                        className="w-full h-full object-cover md:aspect-[1/1] xl:aspect-[1/1]"
                    />
                </div>

                {/* 우측 편집 영역 */}
                <div className="flex flex-col flex-grow w-full h-full border">
                    {/* 유저 네임 영역 */}
                    <div className="w-full gap-4 flex justify-start p-2">
            <span className="rounded-full border border-gray-400">
                <img src="/img/pochaco.jpg" className="w-8 h-8 rounded-full"/>
            </span>
                        <span className="py-1 text-black">ddonghun__</span>
                    </div>

                    {/* 텍스트 입력 영역 */}
                    <textarea
                        type="text"
                        placeholder="내용을 입력하세요"
                        onChange={handleTextChange}
                        className="w-full h-[339px] p-2"
                    ></textarea>

                    {/* 텍스트 상태 및 아이콘 */}
                    <div className="flex justify-between p-2 text-gray-700 border border-t-gray-200">
                        <img
                            src="/assets/icon/smile.svg"
                            className="w-6 h-6 cursor-pointer"
                        />
                        <span>{text.length} / 2200</span>
                    </div>

                    {/* 옵션 영역 */}
                    <div className="flex flex-col gap-4 pt-2">
                        <button className="flex items-center justify-between w-full px-4 py-2 text-black">
                            위치 추가
                            <img src="/assets/icon/locationPin.svg" alt="위치 아이콘" className="w-5 h-5"/>
                        </button>
                        <button className="flex items-center justify-between w-full px-4 py-2 text-black">
                            공동 작업자 추가
                            <img src="/assets/icon/tagUser.svg" alt="공동 작업자 아이콘" className="w-5 h-5"/>
                        </button>

                        {/* 접근성 버튼 및 드롭다운 */}
                        <div className="relative">
                            <button
                                onClick={toggleAccessibilityDropdown}
                                className="flex items-center justify-between w-full px-4 py-2 text-black"
                            >
                                접근성
                                <img src="/assets/icon/dropdown.svg" alt="접근성 아이콘" className="w-5 h-5"/>
                            </button>
                            {isAccessibilityOpen && (
                                <div className="absolute left-0 w-full bg-white border rounded shadow-md z-50">
                                    <div className="text-xs text-gray-500 p-4">
                                        <span>
                                            대체 텍스트는 시각적으로 사진을 보기 어려운 사람들에게 사진 내용을 설명하는 텍스트입니다. 대체 텍스트는 회원님의 사진에 대해 자동으로 생성되며, 직접 입력할 수도 있습니다.
                                        </span>
                                        <div className="flex pt-4 w-full h-8 items-center gap-4 mt-4 mb-4">
                                            <img alt="이미지" src={content} className="w-12 h-12"/>
                                            <input
                                                type="text"
                                                placeholder="대체 텍스트 입력 ..."
                                                className="w-full h-12 border rounded p-2"
                                            ></input>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 고급 설정 버튼 및 드롭다운 */}
                        <div className="relative">
                            <button
                                onClick={toggleAdvancedSettingsDropdown}
                                className="flex items-center justify-between w-full px-4 py-2 text-black"
                            >
                                고급 설정
                                <img src="/assets/icon/dropdown.svg" alt="고급 설정 아이콘" className="w-5 h-5"/>
                            </button>
                            {isAdvancedSettingsOpen && (
                                <div className="absolute left-0 w-full bg-white border rounded shadow-md">
                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">설정 1</div>
                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">설정 2</div>
                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">설정 3</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        ),
    },];

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

    return (<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-200">
        <div
            className="flex flex-col bg-white rounded-lg shadow-lg min-h-[60%] h-fit  min-w-[60%] w-[1200px]">

            {/* 상단 */}
            <h2 className="flex justify-between items-center border-b-2 p-2 font-bold">
                {pageIndex > 0 && (<button
                    onClick={handlePrev}
                    className="px-2 py-1 rounded bg-blue-400 text-white hover:bg-blue-500"
                >
                    이전
                </button>)}
                {/* 모달 제목 중앙에 위치 */}
                <span className="flex-grow text-center">{pages[pageIndex].title}</span>
                {pageIndex > 0 && pageIndex < pages.length - 1 && (<button
                    onClick={handleNext}
                    className="px-2 py-1 rounded bg-blue-400 text-white hover:bg-blue-500"
                >
                    다음
                </button>)}
                {pageIndex === pages.length - 1 && (<button
                    onClick={() => console.log("게시물 공유")}
                    className="px-4 py-1 rounded bg-green-500 text-white hover:bg-green-600"
                >
                    공유하기
                </button>)}
            </h2>

            {/* 현재 페이지 콘텐츠 */}
            {pages[pageIndex].content}
        </div>
    </div>);
};

export default PostModal;
