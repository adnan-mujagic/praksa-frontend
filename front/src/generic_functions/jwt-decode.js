var jwt = require("jsonwebtoken");

export default function jwtDecode() {
    try {
        const decoded = jwt.verify(JSON.parse(sessionStorage.getItem("token")).token,"MY_KEY");
        console.log(JSON.stringify(decoded));
        return decoded; 
    } catch (error) {
        if(error.message === "jwt expired"){
            sessionStorage.removeItem("token");
            window.location="/login";
            alert("Your session token has expired, please log in once again to confirm your identity!");
        }
    }
}