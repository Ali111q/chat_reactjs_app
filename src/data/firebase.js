// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import firebase from "firebase";

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
var final;
var user
// Initialize Firebase
const initializeAppp = () => {
    return new Promise((res, rej) => {
        const app = firebase.initializeApp(firebaseConfig); // firebase initialize
        // db = getFirestore(app); // firestor initialize
        // auth = getAuth(app); // auth initialize
        auth = firebase.auth()
        auth.languageCode = 'ar'; // auth code language
        user = firebase.auth().currentUser
        return res(true)
    })

}


const userInfo ={
    first: "Alan",
    last: "Turing",
    Phone: "+9647737503949",
    id: "",
    born: 1912,
    isOnline: true,
    lastOnline: Date.now(),
    blockList: [],
    chats: [],
}


async function registerUser(props) {
    // try {
    //     const docRef = await addDoc(collection(db, "users"), props);

    //     console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }

}

// firebase captcha render
// async function captcha(phone) {
//     console.log('dd');
//     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//         'size': "normal",
//         'callback': (response) => {
//            signIn(phone)
//            console.log(response);
//         },
//         'expired-callback': () => {
//             // Response expired. Ask user to solve reCAPTCHA again.
//             console.log('expired');
//         },
//     }, auth);
// }

// sign in with mobile
const signIn = (mynumber) => {
    return new Promise((res, rej)=>{
  
    if (mynumber === "" ) return;

    let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
        console.log(result);
        final = result;
        alert("code sent")

        return res(true)
    })
        .catch((err) => {
           return res(false)
            
        });})
}
// confirm verification code 
async function verifyCode(otp){
    if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            
        
        }).catch((err) => {
            alert("Wrong code");
        })
}

function authState(){
    auth.onAuthStateChanged(userr => {
  
        // currentUser is ready now.
        if (userr) {
            console.log('loged in');

        } else {
            console.log("loged out");
            
        }
      });
}
function logOut(){
    firebase.auth().signOut().then(()=>{
        console.log('ghjk');
    })
}

export { initializeAppp, registerUser, signIn, verifyCode, auth, user, logOut }
