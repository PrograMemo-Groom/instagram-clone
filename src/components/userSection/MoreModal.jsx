import {useDispatch, useSelector} from "react-redux";
import {setModalIsOepn} from "@/store/action/ProfilePageAction.js";

const MoreModal = () => {
    const options = [
        { text: "차단", style: "text-red-500 font-bold", onClick: null },
        { text: "제한", onClick: null },
        { text: "신고", onClick: null },
        { text: "공유 대상...", onClick: null },
        { text: "이 계정 정보", onClick: null },
        { text: "메시지 보내기", onClick: null },
        { text: "취소", style: "text-blue-500 font-bold", onClick: "toggleModal" },
    ];
    const { modalIsOpen } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(setModalIsOepn(!modalIsOpen));
    };

    return (
        <div className="bg-black fixed inset-0  bg-opacity-50 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-80">
                <ul className="divide-y divide-gray-200 dark:divide-gray-600">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`py-3 px-4 text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-400 ${option.style || ""}`}
                            onClick={option.onClick === "toggleModal" ? toggleModal : undefined}
                        >
                            {option.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MoreModal;
