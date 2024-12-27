import './index.css';
import MainPage from "@/pages/MainPage.jsx";
import {Outlet, Route, Routes} from "react-router-dom";
import PrivacyPolicy from "@/pages/PrivacyPolicy.jsx";
import DataDeletion from "@/pages/DataDeletion.jsx";
import Loading from "@/pages/loading/Loading.jsx";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import Header from "@/pages/Header.jsx";
import SideBar from '@/pages/SideBar.jsx';
import ProfilePage from "@/pages/ProfilePage.jsx";
import Reels from "@/pages/Reels.jsx";
import LoginPage from "@/pages/LoginPage.jsx";


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

    return (
        <Routes>
            <Route path="/" element={<LayOut/>}>
                <Route index element={<MainPage/>}/>
                <Route path="/account" element={<LoginPage/>}/>
                <Route path="/privacy" element={<PrivacyPolicy/>}/>
                <Route path="/data-deletion" element={<DataDeletion/>}/>
                {/*<Route path="main/*" element={<MainPage/>}/>*/}
                <Route path="/profile-page" element={<ProfilePage/>}/>
                <Route path="/reels" element={<Reels/>}/>
            </Route>
        </Routes>
    )

}

export default App
