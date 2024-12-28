import {doc, setDoc, getDoc} from "firebase/firestore";
import {db} from "@/../firebase.js";


/**
 * 유저 정보(회원가입)를 FireStore에 저장
 * @param {string} userName - 회원 고유Id (userName)
 * @param {object} userData - 회원 정보( id, pw, name, realName )
 */
export async function joinUserInfo(userName, userData) {
    console.log("Firestore Instance:", db);
    try {
        await setDoc(doc(db, "users", userName), userData);
        console.log("회원 정보가 성공적으로 저장되었습니다.");
    } catch (error) {
        console.log("joinUserInfo: 회원정보 저장 실패: ", error.message);
    }
}

/**
 * 유저 정보(회원가입)를 FireStore에 불러오기
 * @param {string} userName - 회원 고유Id (userName)
 * @returns {object|null} - 유저 정보 또는 null
 */
export async function getDuplicateUser(userName) {
    console.log("Firestore Instance:", db);
    try {
        const userDoc = await getDoc(doc(db, "users", userName));

        if (userDoc.exists()) {
            console.log("유저 정보:", userDoc.data()); // 문서 데이터 출력
            return userDoc.data(); // 유저 정보 반환
        } else {
            console.log("해당 유저 정보가 존재하지 않습니다."); // 문서가 없는 경우
            return null;
        }
    } catch (error) {
        console.error("getDuplicateUser: 유저 정보 불러오기 실패: ", error.message);
        throw error; // 에러 발생 시 호출하는 곳에서 처리 가능
    }
}






