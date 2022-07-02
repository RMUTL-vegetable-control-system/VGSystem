import * as firebase from 'firebase/app'
const isInitialize = firebase.getApps().length > 0
if (!isInitialize) {
    firebase.initializeApp({
        apiKey: "AIzaSyD1UcK0reJjaT5elDdAtN7TLlvplXwEzQY",
        authDomain: "vegetable-rmutl-project.firebaseapp.com",
        projectId: "vegetable-rmutl-project",
        storageBucket: "vegetable-rmutl-project.appspot.com",
        messagingSenderId: "1060324438475",
        appId: "1:1060324438475:web:6ea80f384b08b3b562464e"
    })
}
export default firebase

