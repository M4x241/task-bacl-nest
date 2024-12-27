// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyAwKAhecUDgMHHE8WhdTeSp45I79_fjWY4',
  authDomain: 'task-nest-2c693.firebaseapp.com',
  projectId: 'task-nest-2c693',
  storageBucket: 'task-nest-2c693.firebasestorage.app',
  messagingSenderId: '797023158531',
  appId: '1:797023158531:web:399a6e805cd9fe95bf2936',
  measurementId: 'G-0TN02W5T63',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDataBase = getDatabase(app);
// export const analytics = getAnalytics(app);
//https://console.firebase.google.com/project/task-nest-2c693.firebasestorage.app