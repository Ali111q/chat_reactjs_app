// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDE50BdbESF7w4o6xH18Hr_PaPYfcSHIiQ",
    authDomain: "azu-twst.firebaseapp.com",
    projectId: "azu-twst",
    storageBucket: "azu-twst.appspot.com",
    messagingSenderId: "349381482411",
    appId: "1:349381482411:web:218b114b5d0e2a4e4724ee"
};
var db;
var auth;
var user;
// Initialize Firebase
const initializeAppp = () => {
    return new Promise((res, rej) => {
        const app = initializeApp(firebaseConfig); // firebase initialize
        db = getFirestore(app); // firestor initialize
        auth = getAuth(app); // auth initialize
        auth.languageCode = 'ar'; // auth code language
        return res(true)
    })

}


async function registerUser() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Alan",
            last: "Turing",
            Phone: "+9647737503949",
            id: "",
            born: 1912,
            isOnline: true,
            lastOnline: Date.now(),
            blockList: [],
            chats: [],
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

// firebase captcha render
async function useCaptcha(phone) {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
           signIn(phone)
        },
        'expired-callback': () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
        },
    }, auth);
}

// sign in with mobile
async function signIn( phone ) {
    const phoneNumber = phone;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier).then(e=>{
        // message sent what is next??
        window.confirmationResult = e;
    }).catch((error) => {
       console.error(error)
      });
}
// confirm verification code 
async function verifyCode(code){
    window.confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
         user = result.user;
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.error(error);
      });
}

export { initializeAppp, registerUser, user }