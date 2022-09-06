import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAkofDt09NjKBSMQtH9FlitMmbv7D3SHHo",
  authDomain: "reactproject-8b0cd.firebaseapp.com",
  projectId: "reactproject-8b0cd",
  storageBucket: "reactproject-8b0cd.appspot.com",
  messagingSenderId: "949147126915",
  appId: "1:949147126915:web:677e4ec5fb7b6b9e375fb6",
  measurementId: "G-TKCVJQ2JZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth