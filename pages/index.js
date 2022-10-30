// TODO: Add firebase auth test page
// TODO: Add automatic redirect to /login OR /projects

import ButtonSmall from "../components/ButtonSmall";
import Input from "../components/UI/Input";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};
const app = initializeApp(FirebaseCredentials);
const auth = getAuth(app);

const formatUser = (user) => ({
  uid: user.uid,
  email: user.email
});

async function handleEmailConf(email, pass) {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
};

const Home = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePassChange = (event) => {
    setPass(event.target.value);
  };
  const handleSubmit = () => {
    handleEmailConf(email,pass).then(
      router.push("/projects")
    )
  };


  return (
    <div>
      <Input value={email} onChange={handleEmailChange} type="text" />
      <Input value={pass} onChange={handlePassChange} type="password" />
      <ButtonSmall text="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default Home;
