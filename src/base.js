import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const { 
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_PROJECT_ID,
  FB_STORAGEBUCKET,
  FB_MESSAGING_SENDER_ID,
  FB_APP_ID,
  FB_MEASUREMENT_ID
} = process.env

const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGEBUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID,
  measurementId: FB_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// const firebaseConfig = {
//   apiKey: FB_API_KEY,
//   authDomain: FB_AUTH_DOMAIN,
//   projectId: FB_PROJECT_ID,
//   storageBucket: FB_STORAGEBUCKET,
//   messagingSenderId: FB_MESSAGING_SENDER_ID,
//   appId: FB_APP_ID,
//   measurementId: FB_MEASUREMENT_ID
// };

// firebase.initializeApp(firebaseConfig);
//analytics is optional for this tutoral 
// firebase.analytics();

// const storage = firebase.storage()

// export  { storage, firebase as default }