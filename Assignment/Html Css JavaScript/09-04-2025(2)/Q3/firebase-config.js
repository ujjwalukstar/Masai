const firebaseConfig = {
        databaseURL: "https://dashboard-da4ae-default-rtdb.firebaseio.com", 
        apiKey: "AIzaSyDdtpQg9cXxk57Y2xlu0YTtimf-iRFe4Gc",
        authDomain: "dashboard-da4ae.firebaseapp.com",
        projectId: "dashboard-da4ae",
        storageBucket: "dashboard-da4ae.firebasestorage.app",
        messagingSenderId: "402516254981",
        appId: "1:402516254981:web:c42c577803d3f5a89c976c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();