import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const auth = getAuth();

export function logout() {
    signOut(auth)
        .then(() => {
            // Redirect to the login page after logout
            window.location.href = "/template/login.html"; // Adjust as needed
        })
        .catch((error) => {
            console.error("Error during logout: ", error.message);
        });
}
