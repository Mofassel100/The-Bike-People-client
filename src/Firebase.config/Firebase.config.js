
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY_1,
  authDomain: process.env.REACT_APP_AUTHDOMAIN_2,
  projectId: process.env.REACT_APP_AUTHDOMAIN_3,
  storageBucket: process.env.REACT_APP_STORAGEBUCKENT_4,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID_5,
  appId: process.env.REACT_APP_APPID_6,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
