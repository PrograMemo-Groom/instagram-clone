import './index.css';
import MainPage from "@/pages/MainPage.jsx";
import {Outlet, Route, Routes} from "react-router-dom";

function LayOut() {
    return (
        <>
            {/*<Header />*/}
            <div>
                <Outlet /> {/* 현재 라우터에 따라 변경 되는 내용 */}
            </div>
            {/*<Footer />*/}
        </>
    )
}

function App() {

  return (
      <div>
          <h1 className="text-4xl font-bold">App component Loaded</h1>
          <Routes>
              <Route path="/" element={<LayOut/>}>
                  <Route index element={<MainPage/>}/>
                  {/*<Route path="main/*" element={<MainPage/>}/>*/}
              </Route>
          </Routes>
      </div>
  )
}

export default App
