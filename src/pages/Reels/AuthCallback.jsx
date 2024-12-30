import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { exchangeAccessToken } from "@/api/instagramAPI.js";
import { useDispatch } from "react-redux";
import { setAccessToken } from "@/store/reducer/ReelsReducer.js";

const AuthCallback = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            exchangeAccessToken(code)
                .then((data) => {
                    dispatch(setAccessToken(data.access_token)); // Redux에 Access Token 저장
                    navigate("/reels"); // Reels 페이지로 이동
                })
                .catch((err) => console.error("Error exchanging token:", err));
        }
    }, [dispatch, navigate]);

    return <div>Loading...</div>;
};

export default AuthCallback;
