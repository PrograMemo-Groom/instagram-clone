import './index.css';
import MainPage from "@/pages/MainPage.jsx";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import PrivacyPolicy from "@/pages/PrivacyPolicy.jsx";
import DataDeletion from "@/pages/DataDeletion.jsx";
import Loading from "@/pages/loading/Loading.jsx";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import Header from "@/pages/Header.jsx";
import SideBar from '@/pages/SideBar.jsx';
import ProfilePage from "@/pages/ProfilePage.jsx";
import Reels from "@/pages/Reels/Reels.jsx";
import Search from "@/pages/Search.jsx";
import LoginPage from "@/pages/login/LoginPage.jsx";
import JoinPage from "@/pages/login/JoinPage.jsx";
import ForgetPasswordPage from "@/pages/login/ForgetPasswordPage.jsx";
import AuthCallback from "@/pages/reels/AuthCallback.jsx";

function LayOut() {
    const {isLoading} = useSelector((state) => state.common);

    /* isLoading True인 경우 y스크롤 삭제 */
    useEffect(() => {
        isLoading ? document.body.style.overflowY = "hidden" : "";
        return () => {
            document.body.style.overflowY = "";
        }
    }, [isLoading]);

    return (
        <>
            {isLoading ?
                <div className="flex items-center justify-center h-screen">
                    <Loading/>
                </div>
                :
                <>
                    <Header/>
                    <SideBar/>
                    <div className='mt-16 md:mt-0 md:ml-20 sidebarpoint:ml-[16rem] flex items-center justify-center'>
                        <Outlet/> {/* 현재 라우터에 따라 변경 되는 내용 */}
                    </div>
                </>
            }
        </>
    )
}

function App() {
    const {isLogin} = useSelector((state) => state.common);
    return (
        <Routes>
            {!isLogin ?
                <Route path="/">
                    <Route index element={<LoginPage/>}/>
                    <Route path="/account" element={<LoginPage/>}/>
                    <Route path="/account/join" element={<JoinPage/>}/>
                    <Route path="/account/password" element={<ForgetPasswordPage/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Route>
                :
            <Route path="/" element={<LayOut/>}>
                <Route index element={<MainPage/>}/>
                <Route path="/search" element={<Search/>}/>
                {/*<Route path="main/*" element={<MainPage/>}/>*/}
                <Route path="/profile-page" element={<ProfilePage/>}/>
                <Route path="/reels" element={<Reels/>}/>
            </Route>
            }
            <Route path="/privacy" element={<PrivacyPolicy/>}/>
            <Route path="/data-deletion" element={<DataDeletion/>}/>
            {/*<Route path="*" element={<Navigate to="/" replace />} />*/}
            <Route path="/auth/callback" element={<AuthCallback />} />
        </Routes>
    )

}

export default App
