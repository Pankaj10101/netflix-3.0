// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPO6YhvNqZkM8mSyBURs05myimUivLyMY",
    authDomain: "react-movies-d4095.firebaseapp.com",
    databaseURL: "https://react-movies-d4095-default-rtdb.firebaseio.com",
    projectId: "react-movies-d4095",
    storageBucket: "react-movies-d4095.appspot.com",
    messagingSenderId: "118162749440",
    appId: "1:118162749440:web:c2a3015d3e5f27963c00e5"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider()

export default app
export { auth, db, provider }