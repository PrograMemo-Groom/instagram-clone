import { useRef } from "react";

const PostModal = () => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click(); // 버튼 클릭 시 input을 실행
    };

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles.length > 0) {
            console.log("Selected files:", selectedFiles);
            // 파일 업로드 로직을 여기에 추가
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col bg-white rounded-lg shadow-lg h-3/4 w-8/12">
                <h2 className="flex justify-center border-b-2 p-2 font-bold">새 게시물 만들기</h2>

                <div className="flex-grow flex flex-col items-center justify-center space-y-3">
                    <img
                        className="h-40 w-40 object-contain"
                        src="assets/icon/selectImg.svg"
                        alt="이미지 선택"
                    />
                    <p className="text-black">사진과 동영상을 여기다 끌어다 놓으세요</p>

                    <button
                        onClick={handleButtonClick}
                        className="px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-500"
                    >
                        컴퓨터에서 선택
                    </button>

                    {/* 파일 선택 input */}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*, video/*"
                        multiple
                        className="hidden" // 보이지 않도록 숨김
                        onChange={handleFileChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default PostModal;
