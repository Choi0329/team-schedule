// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyB-190xUEMSh12Qz2CgtrxqNBHzwXJQyR0",
    authDomain: "team-chedule-2064b.firebaseapp.com",
    projectId: "team-chedule-2064b",
    storageBucket: "team-chedule-2064b.firebasestorage.app",
    messagingSenderId: "514102029910",
    appId: "1:514102029910:web:ab02155783a973307b15f7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
