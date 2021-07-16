import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBi9GrcxMsgGwr6uZhrx6zVWjY789Ui3jE",
  authDomain: "clone-4ca68.firebaseapp.com",
  projectId: "clone-4ca68",
  storageBucket: "clone-4ca68.appspot.com",
  messagingSenderId: "177175010373",
  appId: "1:177175010373:web:311c6266d0399d571f572c",
  measurementId: "G-Q1F1SF9YS3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
