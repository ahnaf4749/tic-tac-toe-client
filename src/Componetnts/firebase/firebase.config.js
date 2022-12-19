import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.React_app_apiKey,
    authDomain: process.env.React_app_authDomain,
    projectId: process.env.React_app_projectId,
    storageBucket: process.env.React_app_storageBucket,
    messagingSenderId: process.env.React_app_messagingSenderId,
    appId: process.env.React_app_appId
};


const app = initializeApp(firebaseConfig);
export default app;