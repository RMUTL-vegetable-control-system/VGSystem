import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD1UcK0reJjaT5elDdAtN7TLlvplXwEzQY",
    authDomain: "vegetable-rmutl-project.firebaseapp.com",
    databaseURL: "https://vegetable-rmutl-project-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vegetable-rmutl-project",
    storageBucket: "vegetable-rmutl-project.appspot.com",
    messagingSenderId: "1060324438475",
    appId: "1:1060324438475:web:6ea80f384b08b3b562464e",
    measurementId: "G-DFXLB6JKEK"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }