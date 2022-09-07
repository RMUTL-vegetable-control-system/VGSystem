import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDVb2hhmlJHnA5CdXG1kVxtClS9lbp5o5s",
    authDomain: "randomfirebase-9a9fe.firebaseapp.com",
    databaseURL: "https://randomfirebase-9a9fe-default-rtdb.firebaseio.com",
    projectId: "randomfirebase-9a9fe",
    storageBucket: "randomfirebase-9a9fe.appspot.com",
    messagingSenderId: "605212409124",
    appId: "1:605212409124:web:5cb4e9395ed813d2eb07b1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }