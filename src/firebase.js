import firebase from "firebase/compat/app";
import "firebase/compat/database";



const firebaseConfig = {
  apiKey: "AIzaSyA0_zRp-221tFsMAFrgyx2e-auHw-xqDqk",
  authDomain: "react-contact-a64d1.firebaseapp.com",
  projectId: "react-contact-a64d1",
  storageBucket: "react-contact-a64d1.appspot.com",
  messagingSenderId: "762964753063",
  appId: "1:762964753063:web:f105df759c6115087a7982"
};

const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref();