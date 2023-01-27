
import "./App.css";
import Navbar from "./Components/Navbar";
import {getAuth,signOut,GoogleAuthProvider,signInWithPopup,} from "firebase/auth";
import Login from "./Components/LogIn";
import app from "./Firebase";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import Display from "./Components/Display";
import ProductForm from "./Components/ProductForm";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);

  async function checklogin() {
    const docRef = doc(db, "users", user?.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", user?.uid), user);
    }
  }
  async function signUp() {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL, uid } = result.user;
        setUser({
          displayName: displayName,
          email: email,
          photoURL: photoURL,
          uid: uid,
        });
        console.log(displayName, email, photoURL, uid);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function Signout() {
    await signOut(auth)
      .then(() => {
        setUser(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (!user) {
      return;
    }
    checklogin();
  }, [user]);

  return (
    <div className="App">
      {/* {user ? <Display signot={Signout} /> : <Login login={signUp} />} */}
      <ProductForm/>
    </div>
  );
}

export default App;
