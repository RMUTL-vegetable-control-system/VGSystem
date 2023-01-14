import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA-q9R1u3YoXSQU38zpTqCFf3Q12vGGKkI",
    authDomain: "project-vg-6b3d8.firebaseapp.com",
    databaseURL: "https://project-vg-6b3d8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-vg-6b3d8",
    storageBucket: "project-vg-6b3d8.appspot.com",
    messagingSenderId: "72274755780",
    appId: "1:72274755780:web:1c2dd4e51b34a1206d0991"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase }