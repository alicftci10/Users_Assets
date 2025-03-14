export const checkUserData = (navigate) => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (!data) {
        navigate("/Login");
    }
};