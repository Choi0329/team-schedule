// Firebase 설정
let db = null;
let firebaseReady = false;

try {
    const firebaseConfig = {
        apiKey: "AIzaSyB-190xUEMSh12Qz2CgtrxqNBHzwXJQyR0",
        authDomain: "team-chedule-2064b.firebaseapp.com",
        projectId: "team-chedule-2064b",
        storageBucket: "team-chedule-2064b.firebasestorage.app",
        messagingSenderId: "514102029910",
        appId: "1:514102029910:web:ab02155783a973307b15f7"
    };

    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    firebaseReady = true;
} catch (e) {
    console.error('Firebase 초기화 실패:', e);
}
