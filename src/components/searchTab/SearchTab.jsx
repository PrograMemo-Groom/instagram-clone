import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const SearchTab = () => {
    const userId = "test1";
    const isOpen = useSelector((state) => state.search.isOpen);
    const [searchTerm, setSearchTerm] = useState("");

    // 사용자별 고유 키 -> 기존 검색어 가져오기 => 고유 ID 생성 -> 새 검색어 추가 -> 로컬스토리지에 저장
    const saveSearchToLocalStorage = (term) => {
        const key = `searches_${userId}`;
        const existingSearches = JSON.parse(localStorage.getItem(key)) || [];
        const newSearch = {id: Date.now(), value: term};
        const updatedSearches = [...existingSearches, newSearch];
        localStorage.setItem(key, JSON.stringify(updatedSearches));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && searchTerm.trim() !== "") {
            saveSearchToLocalStorage(searchTerm);
            setSearchTerm("");
        }
    };

    return (
        <>
            <div className={`fixed top-0 h-screen w-80 bg-white shadow-lg transform transition-transform duration-300
                 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
                 sidebarpoint:left-[16rem] left-[4.5rem] hidden md:block`}
                 style={{visibility: isOpen ? 'visible' : 'hidden',}}>
                <h2 className="p-4 font-semibold mt-4 ml-2 text-2xl">검색</h2>
                <div className="flex items-center w-18 bg-gray-100 rounded-md px-4 py-2 ml-4">
                    <input type="text"
                           placeholder="검색"
                           className="bg-transparent w-full outline-none text-gray-600 placeholder-gray-400"
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                           onKeyDown={handleKeyDown}
                    />
                    <button
                        className="flex items-center justify-center w-5 h-5 bg-gray-300 text-white pb-1 rounded-full hover:bg-gray-400">&times;</button>
                </div>
                <div className="w-full h-[1px] bg-gray-200 mt-5 mb-5"></div>
                <div className="pl-4 pr-4">
                    <h3 className="text-md font-semibold">최근 검색 항목</h3>
                    <ul>
                        <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                            <span className="text-sm">검색 항목 1</span>
                            <button className="text-red-500">X</button>
                        </li>
                        <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                            <span className="text-sm">검색 항목 2</span>
                            <button className="text-red-500">X</button>
                        </li>
                        <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                            <span className="text-sm">검색 항목 3</span>
                            <button className="text-red-500">X</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`fixed top-16 right-4 w-64 bg-white shadow-lg rounded-lg
                 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                 sm:block md:hidden transition-opacity duration-300`}>
                <h2 className="p-4 font-bold">검색</h2>
                <input type="text"
                       placeholder="검색"
                       className="w-full p-2 border-b border-gray-200 focus:outline-none"/>
                <div className="p-4">
                    <h3 className="text-sm font-semibold">최근 검색 항목</h3>
                    <ul>
                        <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                            <span className="text-sm">검색 항목 1</span>
                            <button className="text-red-500">X</button>
                        </li>
                        <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                            <span className="text-sm">검색 항목 2</span>
                            <button className="text-red-500">X</button>
                        </li>
                        <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                            <span className="text-sm">검색 항목 3</span>
                            <button className="text-red-500">X</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SearchTab;