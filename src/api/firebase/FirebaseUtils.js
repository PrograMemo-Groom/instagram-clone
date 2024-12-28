import {doc, setDoc} from "firebase/firestore";
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






