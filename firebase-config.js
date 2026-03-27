// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyB-190xUEMSh12Qz2CgtrxqNBHzwXJQyR0",
    authDomain: "team-chedule-2064b.firebaseapp.com",
    projectId: "team-chedule-2064b",
    storageBucket: "team-chedule-2064b.firebasestorage.app",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
