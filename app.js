// Firebase configuration (Replace with your Firebase project config)
const firebaseConfig = {
    apiKey: "AIzaSyAeUcMxHuVZli2weXqtbcQXkvkwMTa6mDw",
    authDomain: "fm-telemetry.firebaseapp.com",
    projectId: "fm-telemetry",
    storageBucket: "fm-telemetry.firebasestorage.app",
    messagingSenderId: "444751062752",
    appId: "1:444751062752:web:a2a3f7dc803ed4492f1285"
  };
  
  // Initialize Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  // Fetch data from Firebase
  const telemetryRef = ref(database,'telemetry');
  
  // Update the webpage when data changes
  onValue(telemetryRef, (snapshot) => {
    const data = snapshot.val();
    document.getElementById('temperature').textContent = `Temperature: ${data.temp} °C`;
    document.getElementById('speed').textContent = `Speed: ${data.Speed} km/h`;
  });
  