// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyB3vb6AU497Ugb2eWaqZ_s04X6lH2xu2tg",
//     authDomain: "trelloclone-22a74.firebaseapp.com",
//     projectId: "trelloclone-22a74",
//     storageBucket: "trelloclone-22a74.appspot.com",
//     messagingSenderId: "211418015205",
//     appId: "1:211418015205:web:23c7863709e001f849fb0c"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>

import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
      apiKey: "AIzaSyB3vb6AU497Ugb2eWaqZ_s04X6lH2xu2tg",
      authDomain: "trelloclone-22a74.firebaseapp.com",
      projectId: "trelloclone-22a74",
      storageBucket: "trelloclone-22a74.appspot.com",
      messagingSenderId: "211418015205",
      appId: "1:211418015205:web:23c7863709e001f849fb0c"

};

firebase.initializeApp(firebaseConfig);
export default firebase;