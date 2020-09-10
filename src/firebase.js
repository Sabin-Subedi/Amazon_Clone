import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyBK7hwbundARFwQTo5vCpGpVPltGN7FUfI",
  authDomain: "clone-d397b.firebaseapp.com",
  databaseURL: "https://clone-d397b.firebaseio.com",
  projectId: "clone-d397b",
  storageBucket: "clone-d397b.appspot.com",
  messagingSenderId: "420326652196",
  appId: "1:420326652196:web:3e77287acac3fab3b65bb1",
  measurementId: "G-7002Z1J9CQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
