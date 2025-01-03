const PostModal = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col bg-white rounded-lg shadow-lg h-3/4 w-8/12">
                {/* 제목 */}
                <h2 className="flex justify-center border-b-2 p-2 font-bold">새 게시물 만들기</h2>

                {/* 이미지, 안내 메시지, 버튼 */}
                <div className="flex-grow flex flex-col items-center justify-center space-y-3">
                    <img
                        className="h-40 w-40 object-contain"
                        src="assets/icon/selectImg.svg"
                        alt="이미지 선택"
                    />
                    <p className="text-black">사진과 동영상을 여기다 끌어다 놓으세요</p>
                    <button className="px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-500">
                        컴퓨터에서 선택
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
