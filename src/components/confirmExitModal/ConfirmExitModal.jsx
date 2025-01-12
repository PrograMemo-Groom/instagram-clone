import {useDispatch, useSelector} from "react-redux";
import {setOpenPostingModal} from "@/store/action/MainAction.js";
import {setOpenConfirmExitModal} from "@/store/action/CommonAction.js";

const ConfirmExitModal = () => {
    const {openPostingModal} = useSelector((state) => state.main);
    const {OpenConfirmExitModal } = useSelector((state) => state.common);

    const dispatch = useDispatch();

    const handleExitPostModal = () => {
        dispatch(setOpenPostingModal(!openPostingModal));
        dispatch(setOpenConfirmExitModal(!OpenConfirmExitModal));
    }

    const handleCancelExit = () => {
        dispatch(setOpenConfirmExitModal(!OpenConfirmExitModal));
    }
    
    
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-200">
            <div className="flex flex-col bg-white rounded-lg shadow-lg h-[200px] w-[400px] p-3">
                <h1 className="flex flex-col justify-center items-center border-b-2 p-2 font-bold">
                    게시물을 삭제하시겠어요?
                    <span className="flex justify-center items-center p-2 text-gray-500 text-xs">
        지금 나가면 수정내용이 저장되지 않습니다.
      </span>
                </h1>
                <div className="flex flex-col flex-grow">
                    <button
                        className="flex-1 flex justify-center items-center border-b-2 text-red-600 font-bold hover:bg-gray-100"
                        onClick={handleExitPostModal}
                    >
                        삭제
                    </button>
                    <button
                        className="flex-1 flex justify-center items-center text-black font-bold hover:bg-gray-100"
                        onClick={handleCancelExit}
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ConfirmExitModal;