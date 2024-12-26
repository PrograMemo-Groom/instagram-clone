import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalIsOepn } from "@/store/action/ProfilePageAction.js";

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
    const modalRef = useRef(null);

    const toggleModal = () => {
        dispatch(setModalIsOepn(!modalIsOpen));
    };

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            toggleModal(); // 외부 클릭 시 모달 닫기
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div
                ref={modalRef} // 모달 DOM 참조
                className="bg-white rounded-lg shadow-lg w-80"
            >
                <ul className="divide-y divide-gray-200">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`py-3 px-4 text-center cursor-pointer hover:bg-gray-100 ${option.style || ""}`}
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
