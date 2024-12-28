export const validateFields = (fields) => {
    return Object.entries(fields).some(([key, value]) => {
        if (key === "userPw") {
            return value.trim().length === 0 || value.trim().length < 6;
        }
        return value.trim().length === 0;
    })
}