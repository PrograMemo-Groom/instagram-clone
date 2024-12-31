import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {INSTAGRAM_ACCESS_TOKEN} from "@/config/config.js";
import axios from "axios";

const SearchTab = () => {
    const userId = "test1";
    const isOpen = useSelector((state) => state.search.isOpen);
    const [searchTerm, setSearchTerm] = useState("");
    const [searches, setSearches] = useState([]);
    const [results, setResults] = useState([]);
    // const accessToken = INSTAGRAM_ACCESS_TOKEN;
    const dispatch = useDispatch();
    const {accessToken, userProfile} = useSelector((state) => state.search);

    // 사용자별 고유 키 -> 기존 검색어 가져오기 => 고유 ID 생성 -> 새 검색어 추가 -> 로컬스토리지에 저장
    // 로컬스토리지에 검색어 저장
    const saveSearchToLocalStorage = (newSearch) => {
        const key = `searches_${userId}`;
        const updatedSearches = [...searches, newSearch];
        localStorage.setItem(key, JSON.stringify(updatedSearches));
        setSearches(updatedSearches);
    };

    // 로컬스토리지에서 검색어 가져오기
    useEffect(() => {
        const key = `searches_${userId}`;
        const savedSearches = JSON.parse(localStorage.getItem(key)) || [];
        setSearches(savedSearches);
    }, [userId]);

    // 모두 지우기 버튼 클릭 핸들러
    const clearAllSearches = () => {
        const key = `searches_${userId}`;
        localStorage.removeItem(key);
        setSearches([]);
    };

    // Instagram User ID 가져오기
    const getInstagramUserId = async () => {
        console.log("getInstagramUserId");
        try {
            const response = await axios.get(
                `https://graph.facebook.com/v16.0/me`,
                {
                    params: {
                        fields: "id",
                        access_token: accessToken,
                    },
                }
            );
            console.log("Instagram User ID:", response.data.id);
            return response.data.id;
        } catch (error) {
            console.error("Error fetching Instagram User ID:", error.response || error.message);
            return null;
        }
    };

    // 인스타그램 API 호출 함수
    const handleBusinessSearch = async (searchTerm) => {

        if (!searchTerm.trim()) {
            console.log("username: ", username);
            return;
        }

        try {
            console.log("handleBusinessSearch: 디버깅용");
            const igUserId = await getInstagramUserId(); // Instagram User ID 가져오기

            if (!igUserId) {
                console.error("Instagram User ID를 가져올 수 없습니다.");
                return;
            }

            const response = await axios.get(
                `https://graph.facebook.com/v16.0/${igUserId}/business_discovery`,
                {
                    params: {
                        fields: `username,name,profile_picture_url,biography`,
                        username: searchTerm, // 검색할 사용자 이름
                        access_token: accessToken,
                    },
                }
            );

            console.log("Business Discovery Results: ", response.data);
            setResults([response.data]);
        } catch (error) {
            console.error("Error fetching business account data:", error.response || error.message);
        }
    };

    // const handleSearch = async () => {
    //     if (!searchTerm.trim()) return;
    //
    //     try {
    //         const response = await axios.get(
    //             `https://graph.facebook.com/v16.0/${"dev_test_1231"}/business_discovery`,
    //             {
    //                 params: {
    //                     fields: `username,name,profile_picture_url,biography`,
    //                     username: username,
    //                     access_token: accessToken,
    //                 },
    //             }
    //         );
    //
    //         setResults(response.data.data);
    //     } catch (error) {
    //         console.error("Error fetching Instagram accounts:", error);
    //     }
    // };

    // 엔터 키 이벤트 핸들러
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && searchTerm.trim() !== "") {
            console.log("Current searchTerm: ", searchTerm);
            const newSearch = {id: Date.now(), value: searchTerm};
            saveSearchToLocalStorage(newSearch);
            handleBusinessSearch(searchTerm);
            setSearchTerm(""); // 입력창 초기화
            console.log("accessToken: ", accessToken);
        }
    };

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                // 사용자 프로필 데이터 가져오기
                const response = await axios.get(
                    `https://graph.facebook.com/v16.0/me`,
                    {
                        params: {
                            fields: 'id,username,profile_picture_url,biography',
                            access_token: accessToken,
                        },
                    }
                );

                // API 응답을 Redux state에 저장
                dispatch(setUserProfile(response.data));
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        if (accessToken) {
            fetchUserProfile();
        }
    }, [accessToken, dispatch]);
    return (
        <div className="p-4">
            {userProfile ? (
                <div className="flex items-center space-x-4">
                    <img
                        src={userProfile.profile_picture_url}
                        alt={userProfile.username}
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <h2 className="text-xl font-bold">{userProfile.username}</h2>
                        <p className="text-gray-500">{userProfile.biography || 'No bio available'}</p>
                    </div>
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </div>
        // <>
        //     <div className={`fixed top-0 h-screen w-80 bg-white shadow-lg transform transition-transform duration-300
        //          ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        //          sidebarpoint:left-[16rem] left-[4.5rem] hidden md:block`}
        //          style={{visibility: isOpen ? 'visible' : 'hidden',}}>
        //         <h2 className="p-4 font-semibold mt-4 ml-2 text-2xl">검색</h2>
        //         <div className="flex items-center w-18 bg-gray-100 rounded-md px-4 py-2 ml-4">
        //             <input type="text"
        //                    placeholder="검색"
        //                    className="bg-transparent w-full outline-none text-gray-600 placeholder-gray-400"
        //                    value={searchTerm}
        //                    onChange={(e) => setSearchTerm(e.target.value)}
        //                    onKeyDown={handleKeyDown}
        //             />
        //             <button
        //                 className="flex items-center justify-center w-5 h-5 bg-gray-300 text-white pb-1 rounded-full hover:bg-gray-400"
        //                 onClick={() => setSearchTerm("")}
        //             >
        //                 &times;
        //             </button>
        //         </div>
        //         <div className="w-full h-[1px] bg-gray-200 mt-5 mb-5"></div>
        //         <div className="pl-4 pr-4">
        //             <div className="flex items-center  justify-between">
        //                 <h3 className="text-md font-semibold">최근 검색 항목</h3>
        //                 <button className="text-sm font-semibold text-blue-400"
        //                         onClick={clearAllSearches}>모두 지우기
        //                 </button>
        //             </div>
        //             <div className="bg-white rounded-lg p-4">
        //                 <ul>
        //                     {results.map((user) => (
        //                         <li key={user.id} className="flex items-center mb-4">
        //                             <img
        //                                 src={user.profile_picture_url}
        //                                 alt={user.username}
        //                                 className="w-10 h-10 rounded-full mr-4"
        //                             />
        //                             <div>
        //                                 <p className="text-sm font-bold">{user.username}</p>
        //                                 <p className="text-sm text-gray-500">
        //                                     팔로워: {user.followers_count || "정보 없음"}
        //                                 </p>
        //                             </div>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //
        //
        //             {/*<ul>*/}
        //             {/*    {searches.map((search) => (*/}
        //             {/*        <li className="flex items-center justify-between p-2 hover:bg-gray-100">*/}
        //             {/*            <span className="text-sm">{search.value}</span>*/}
        //             {/*            <button className="text-red-500">X</button>*/}
        //             {/*        </li>*/}
        //             {/*    ))}*/}
        //             {/*</ul>*/}
        //         </div>
        //     </div>
        //     <div className={`fixed top-16 right-4 w-64 bg-white shadow-lg rounded-lg
        //          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        //          sm:block md:hidden transition-opacity duration-300`}>
        //         <h2 className="p-4 font-bold">검색</h2>
        //         <input type="text"
        //                placeholder="검색"
        //                className="w-full p-2 border-b border-gray-200 focus:outline-none"/>
        //         <div className="p-4">
        //             <h3 className="text-sm font-semibold">최근 검색 항목</h3>
        //             <ul>
        //                 <li className="flex items-center justify-between p-2 hover:bg-gray-100">
        //                     <span className="text-sm">검색 항목 1</span>
        //                     <button className="text-red-500">X</button>
        //                 </li>
        //                 <li className="flex items-center justify-between p-2 hover:bg-gray-100">
        //                     <span className="text-sm">검색 항목 2</span>
        //                     <button className="text-red-500">X</button>
        //                 </li>
        //                 <li className="flex items-center justify-between p-2 hover:bg-gray-100">
        //                     <span className="text-sm">검색 항목 3</span>
        //                     <button className="text-red-500">X</button>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </>
    )
        ;
};

export default SearchTab;