import {SET_ACTIVE_MODAL, TOGGLE_LIKE, SET_COMMENTS, INCREMENT_LIKE_COUNT, ADD_COMMENT} from "../type/ReelsActionType";

export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_REELS_DATA = "SET_REELS_DATA";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

export const setAccessToken = (token) => ({
    type: SET_ACCESS_TOKEN,
    payload: token,
});

export const setReelsData = (data) => ({
    type: SET_REELS_DATA,
    payload: data,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    payload: profile,
});

const initialState = {
    activeModal: null, // 현재 활성화된 모달
    accessToken: "IGAAM2S8dbYxRBZAE1WanZAlN2tfYk9icVJ3V1BrekpJZAm5sdVBYOWEzaTYxajZADcGxialNjN1FhY3ZAqellwN215dXdUcm5TRlBnUmh1VHIyR1AxbjVPM2pzallHTm9JeEdKYTFYUnBFRUhZASjRTQlJTVEtWYTNlT3ctbWRWVm8wTQZDZD", // Access Token 추가
    reelsData: [], // Reels 데이터를 저장할 상태 추가
    userProfile: null, // 사용자 프로필 상태 추가
    comments: {}, //댓글
};

const reelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload,
            };

        case SET_REELS_DATA: {
            const reelsWithLikes = action.payload.map(reel => ({
                ...reel,
                isLiked: false,
                likeCount : 0,
            }));
            return {
                ...state,
                reelsData: reelsWithLikes,
            };
        }

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            };

        case SET_ACTIVE_MODAL:
            return {
                ...state,
                activeModal: action.payload,
            };

        case TOGGLE_LIKE:
            return {
                ...state,
                reelsData: state.reelsData.map(reel =>
                    reel.id === action.payload
                        ? {
                            ...reel,
                            isLiked: !reel.isLiked,
                            likeCount: reel.isLiked ? reel.likeCount - 1 : reel.likeCount + 1,
                        }
                        : reel
                ),
            };
        case SET_COMMENTS:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.payload.mediaId]: action.payload.comments.map((comment) => ({
                        ...comment,
                        likeCount: comment.likeCount || 0,
                        isLiked: comment.isLiked || false,
                    })),
                },
            };
        case INCREMENT_LIKE_COUNT: {
            return {
                ...state,
                reelsData: state.reelsData.map(reel =>
                    reel.id === action.payload
                        ? { ...reel, likeCount: reel.likeCount + 1 }
                        : reel
                ),
            };
        }
        case ADD_COMMENT: {
            const { mediaId, comment } = action.payload;

            // 이미 존재하는 댓글인지 확인
            const mediaComments = state.comments[mediaId] || [];
            if (mediaComments.find((c) => c.id === comment.id)) {
                return state; // 이미 존재하면 상태 변경 없음
            }

            return {
                ...state,
                comments: {
                    ...state.comments,
                    [mediaId]: [...mediaComments, comment],
                },
            };
        }
        case "TOGGLE_COMMENT_LIKE": {
            const { mediaId, commentId } = action.payload;

            return {
                ...state,
                comments: {
                    ...state.comments,
                    [mediaId]: state.comments[mediaId].map((comment) =>
                        comment.id === commentId
                            ? {
                                ...comment,
                                isLiked: !comment.isLiked,
                                likeCount: comment.isLiked
                                    ? (comment.likeCount || 0) - 1 // 기본값 0
                                    : (comment.likeCount || 0) + 1, // 기본값 0
                            }
                            : comment
                    ),
                },
            };
        }

        default:
            return state;
    }
};

export default reelsReducer;