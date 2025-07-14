import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../lib/firebase';
import { toast } from 'react-hot-toast';



const handleError = (code) => {
    let errorMessage = null;


    switch (code) {
        case "auth/invalid-email":
            errorMessage = "Invalid credentials. Please check your email and password.";
            break;
        case "auth/user-not-found":
            errorMessage = "User not registered with this email.";
            break;
        case "auth/weak-password":
            errorMessage = "Weak password. Please choose a stronger password.";
            break;
        case "auth/email-already-in-use":
            errorMessage = "Email already in use. Please use a different email.";
            break;
        case "auth/credential-already-in-use":
            errorMessage = "Credential already in use. Please try signing in with a different method.";
            break;
        case "auth/invalid-credential":
            errorMessage = "Invalid credentials. Please check your email and password.";
            break;
    }

    return errorMessage;

}



export const handleGoogleLogin = async () => {
    try {
        console.log("Attempting Google login...");
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        if (!user) {
            return null;
        }
        console.log("Google login successful:", user);
        return user;
    } catch (error) {
        console.error("Google login failed:", error);
        let errorMessage = handleError(error.code);

        if (errorMessage) {
            toast.error(errorMessage, {
                duration: 4000,
                position: 'top-right',
            });
        }

        return null;

    }
}


export const handleEmailSignup = async (email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;
        if (!user) {
            return null;
        }
        console.log("Email signup successful:", user);
        toast.success("Email signup successful");
        return user;
    } catch (error) {
        console.error("Email signup failed:", error);
        let errorMessage = handleError(error.code);

        if (errorMessage) {
            toast.error(errorMessage, {
                duration: 4000,
                position: 'top-right',
            });
        }
    }
}

export const handleEmailLogin = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;
        if (!user) {
            return null;
        }
        console.log("Email login successful:", user);
        toast.success("Email login successful");
        return user;
    } catch (error) {
        console.error("Email login failed:", error);
        let errorMessage = handleError(error.code);

        if (errorMessage) {
            toast.error(errorMessage, {
                duration: 4000,
                position: 'top-right',
            });
        }
    }
}
