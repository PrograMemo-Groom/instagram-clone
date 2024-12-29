import {doc, setDoc, getDoc} from "firebase/firestore";
import {db} from "@/../firebase.js";


/**
 * 유저 정보(회원가입)를 FireStore에 저장
 * @param {object} userData - 회원 정보( id, pw, name, realName )
 * @returns {object} - 처리 결과 success/messages
 */
export async function joinUserInfo(userData) {
    // console.log("Firestore Instance:", db);
    try {
        // 유저 정보 저장
        await Promise.all([
            setDoc(doc(db, "users", userData.id), userData),
            setDoc(doc(db, "usingNames", userData.name), {reserved: true}),
            setDoc(doc(db, "usingIds", userData.id), {reserved: true}),
        ]);

        // todo : 회원정보가 성공적으로 저장되었는지 확인하기 위해 작성한 것 테스트 이후 제거
        const messages = "회원 정보가 성공적으로 저장되었습니다.";
        console.log(messages);
        return {
            success: true,
            messages
        }
    } catch (error) {
        console.log("joinUserInfo: 회원정보 저장 실패: ", error.message);
    }
}

/**
 * 유저 정보(회원가입)를 FireStore에 불러오기
 * @param {string} userName - 회원 고유Id (userName)
 * @param {string} userId - 회원id (userId)
 * @returns {object} - 유저 정보 또는 null
 */
export async function getDuplicateUser(userName, userId) {
    console.log("Firestore Instance:", db);
    try {
        const userDoc = await getDoc(doc(db, "users", userId));

        if (userDoc.exists()) {
            // 사용자가 가입했는지 여부 확인
            const idValidation = await validateUserIds(userId);
            if (!idValidation.success) {
                return idValidation;
            }
            // 사용자 name이 중복되었는지 여부 확인
            const nameValidation = await validateUserName(userName);
            if (!nameValidation.success) {
                return nameValidation;
            }
        }
        console.log("해당 유저 정보가 존재하지 않습니다.");
        return {
            success: true,
            messages: "",
        };
    } catch (error) {
        console.error("getDuplicateUser: 유저 정보 불러오기 실패: ", error.message);
        throw error; // 에러 발생 시 호출하는 곳에서 처리 가능
    }
}

/**
 * 유저 정보 name의 중복 처리 값 확인하기
 * @param {string} userName - 회원 고유Id (userName)
 * @returns {object} - 유저 정보 또는 null
 */
export async function validateUserName(userName) {
    const nameDoc = await getDoc(doc(db, "usingNames", userName));
    return nameDoc.exists() ? {
        success: false,
        messages: "이미 사용중인 이름입니다."
    } : {
        success: true
    }
}

/**
 * 유저 정보 id의 중복 처리 값 확인하기
 * @param {string} userId - 회원id (userId)
 * @returns {object} - 유저 정보 또는 null
 */
export async function validateUserIds(userId) {
    const idDoc = await getDoc(doc(db, "usingIds", userId));
    return idDoc.exists() ? {
        success: false,
        messages: "이미 가입된 사용자입니다."
    } : {
        success: true
    }
}

/**
 * 유저 로그인 Firestore에서 갖고온 값이랑 비교
 * @param {object} userData - 회원 정보( id, pw )
 * @returns {object} - 처리 결과 success/messages
 */
export async function loginUserInfo(userData) {
    console.log("Firestore Instance:", db);
    try {
        const userDoc = await getDoc(doc(db, "users", userData.id));
        await getDoc(doc(db, "users", userData.name), userData);
        // todo : 회원정보가 성공적으로 저장되었는지 확인하기 위해 작성한 것 테스트 이후 제거
        const messages = "회원 정보가 성공적으로 저장되었습니다.";
        console.log(messages);
        return {
            success: true,
            messages
        }
    } catch (error) {
        console.log("joinUserInfo: 회원정보 저장 실패: ", error.message);
    }
}





