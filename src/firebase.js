{/* 
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
     getAuth,
     signInWithEmailAndPassword, 
     signOut} from "firebase/auth";
import { addDoc,
    collection,
    getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyAFN0G37aMhfKpdggUjwP0JkZBVkqUu9Ps",
  authDomain: "yonny-movie.firebaseapp.com",
  projectId: "yonny-movie",
  storageBucket: "yonny-movie.appspot.com",
  messagingSenderId: "371948501897",
  appId: "1:371948501897:web:87bbf02b51e1ccdce27f58",
  measurementId: "G-EF2PP4T3PM"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await addDoc(collection(db, 'user'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
      console.log('Signed up user:', user);
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error(error.code.split('/')[1].split('-').join(' '));
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in user:', userCredential.user);
    } catch (error) {
      console.error('Error signing in:', error);
      
      // Handle specific error cases
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        toast.error('Invalid email or password');
      } else {
        toast.error(error.code.split('/')[1].split('-').join(' '));
      }
    }
  };
  
const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};
*/}