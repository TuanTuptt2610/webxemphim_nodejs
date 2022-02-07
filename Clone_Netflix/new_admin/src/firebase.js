import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyBSXSx8hHG5wl79ZnHwMNzSmB3gxRKkx6k",
  // authDomain: "netflix-clone-80705.firebaseapp.com",
  // projectId: "netflix-clone-80705",
  // storageBucket: "netflix-clone-80705.appspot.com",
  // messagingSenderId: "41054507419",
  // appId: "1:41054507419:web:b0e0cbd9708b1fc0e3513e",
  // measurementId: "G-CRYCXDHX32",

  // apiKey: "AIzaSyDe2WTk_psnjJdKeAdgEu58JkNsNyGo8Zs",
  // authDomain: "netflix2-9cb74.firebaseapp.com",
  // projectId: "netflix2-9cb74",
  // storageBucket: "netflix2-9cb74.appspot.com",
  // messagingSenderId: "954127532271",
  // appId: "1:954127532271:web:3aa4568c04e28722119b1a",
  // measurementId: "G-B8ZF7BT5V8",

  // apiKey: "AIzaSyB5h_6mpX7agUTBikJMYFdeS6ikktnszZo",
  // authDomain: "newnetflix-dfa5d.firebaseapp.com",
  // projectId: "newnetflix-dfa5d",
  // storageBucket: "newnetflix-dfa5d.appspot.com",
  // messagingSenderId: "153224669865",
  // appId: "1: 153224669865: web: 5707243ceabd1cd84e57b8",
  // measurementId: "G-ETNSXNEJQE",

  apiKey: "AIzaSyBb3kj-YCtFvsSTgdQu3zv0dmwCc9YrN_I",
  authDomain: "newnetflix2-cce3e.firebaseapp.com",
  projectId: "newnetflix2-cce3e",
  storageBucket: "newnetflix2-cce3e.appspot.com",
  messagingSenderId: "635005304018",
  appId: "1:635005304018:web:5f577627d61c0dad34010b",
  measurementId: "G-VVXS4V6706",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
