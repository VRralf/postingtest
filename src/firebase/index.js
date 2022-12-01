
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA07jymlrHel-5o4B3psai7-HZFSLx2WMI',
  authDomain: 'postingtest-616d1.firebaseapp.com',
  projectId: 'postingtest-616d1',
  storageBucket: 'postingtest-616d1.appspot.com',
  messagingSenderId: '680912352460',
  appId: '1:680912352460:web:97c316cbed319739b13e69'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };