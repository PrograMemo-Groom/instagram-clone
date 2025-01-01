import {
    INSTAGRAM_CLIENT_ID,
    INSTAGRAM_CLIENT_SECRET,
    INSTAGRAM_AUTH_URL,
    INSTAGRAM_REDIRECT_URI,
    INSTAGRAM_TOKEN_URL
} from "@/config/config.js";
import axios from "axios";

const instagramInstance = axios.create({
    baseURL: INSTAGRAM_TOKEN_URL,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
});
export const debugAccessToken = async (accessToken) => {
    try {
        const response = await axios.get(
            `https://graph.facebook.com/debug_token`,
            {
                params: {
                    input_token: accessToken,
                    access_token: `${INSTAGRAM_CLIENT_ID}|${INSTAGRAM_CLIENT_SECRET}`, // App Access Token
                },
            }
        );
        console.log("Access Token Debug Info:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error debugging access token:", error.response?.data || error.message);
        throw error;
    }

};



/* Oauth 인증 url 생성 - firebase 연동시 변경 필요 */
export const getAuthUrl = () => {
    return `${INSTAGRAM_AUTH_URL}?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${INSTAGRAM_REDIRECT_URI}&scope=instagram_graph_user_media,instagram_graph_user_comments&response_type=code`;
};


/* Access Token 교환 */
export const exchangeAccessToken = async (code) => {
    try {
        const response = await instagramInstance.post("", null, {
            params: {
                client_id: INSTAGRAM_CLIENT_ID,
                client_secret: INSTAGRAM_CLIENT_SECRET,
                grant_type: "authorization_code",
                redirect_uri: INSTAGRAM_REDIRECT_URI,
                code: code,
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        // Access Token 및 사용자 ID 반환
        return response.data;
    } catch (error) {
        console.error("Error exchanging access token:", error.response?.data || error.message);
        throw error;
    }
};

/* 사용자 프로필 가져오기 */
export const getUserProfile = async (accessToken) => {
    try {
        const response = await axios.get("https://graph.instagram.com/me", {
            params: {
                fields: "id,username,profile_picture_url",
                access_token: accessToken,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching user profile:", error.response?.data || error.message);
        throw error;
    }
};

export const getUserReels = async (accessToken) => {
    console.log("Fetching reels data with token:", accessToken);
    try {
        const response = await axios.get("https://graph.instagram.com/me/media", {
            params: {
                fields: "id,caption,media_type,media_url,thumbnail_url,username,timestamp",
                access_token: accessToken,
            },
        });
        console.log("Fetched reels data:", response.data.data);

        // 날짜 변환 처리
        return response.data.data.map((reel) => ({
            ...reel,
            date: new Date(reel.timestamp).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        }));
    } catch (error) {
        console.error("Error fetching media:", error.response?.data || error.message);
        throw error;
    }
};

export const getReelComments = async (mediaId, accessToken) => {
    try {
        const response = await axios.get(
            `https://graph.instagram.com/${mediaId}/comments`,
            {
                params: {
                    fields: "id,username,text,timestamp",
                    access_token: accessToken,
                },
            }
        );
        return response.data.data; // 댓글 데이터 배열 반환
    } catch (error) {
        console.error("Error fetching comments:", error.response?.data || error.message);
        return [];
    }
};