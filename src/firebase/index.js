import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCvF9zSmvsyET68d_c6MxJUCk5aRAgKFdo",
    authDomain: "coderhouse-ecommerce-60236.firebaseapp.com",
    databaseURL: "https://coderhouse-ecommerce-60236.firebaseio.com",
    projectId: "coderhouse-ecommerce-60236",
    storageBucket: "coderhouse-ecommerce-60236.appspot.com",
    messagingSenderId: "224396454012",
    appId: "1:224396454012:web:1d7c8c1639a22a858681f9",
    // apiKey: process.env.REACT_APP_FS_API_KEY,
    // authDomain: process.env.REACT_APP_FS_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FS_DATABASE_URL,
    // projectId: process.env.REACT_APP_FS_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FS_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FS_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FS_APP_ID
});
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
