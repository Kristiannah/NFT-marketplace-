// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDX5l-iBZLWspb6bOlQSMvm7PnP2MYBs5o",
  authDomain: "artmintx.firebaseapp.com",
  projectId: "artmintx",
  storageBucket: "artmintx.firebasestorage.app",
  messagingSenderId: "209020671049",
  appId: "1:209020671049:web:df8f1f8b986a747ba1db98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Listen if user is logged in or not
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in → go to dashboard
    if (!window.location.pathname.includes("dashboard.html")) {
      window.location.href = "dashboard.html";
    }
  } else {
    // User is not signed in → redirect to login
    if (!window.location.pathname.includes("index.html")) {
      window.location.href = "index.html";
    }
  }
});
