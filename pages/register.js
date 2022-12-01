import Image from "next/image";
import ButtonPrimary from "../components/UI/Buttons/ButtonPrimary";
import Checkbox from "../components/UI/Checkbox";
import Input from "../components/UI/FormElements/Input";

import  { firebaseAuth } from "../firebase/clientApp";
import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import ClickableText from "../components/UI/Buttons/ClickableText";
import axios from "axios";

const Register = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(firebaseAuth);

    
  

  useEffect(() => {
    if (!loading && error != null) {
      console.error(error);
    } else if (!loading && user != null) {
      axios.post("http://127.0.0.1:8000/user/register/", {
        username: username,
        email: email,
        localID: firebaseAuth.currentUser.uid
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });  
      router.push("/profile");
      
    }
  }, [user, loading, error]);
  

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/5 h-4/6 border-solid border-2 rounded-lg flex items-center justify-evenly">
          {/* Form elements */}
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="w-2/3">
              <h1 className="text-4xl mb-2">Create new account</h1>
              <div className="flex justify-start items-center mb-4">
                <h3 className="text-l text-gray-500 mr-2">
                  Already have an account?
                </h3>
                <ClickableText
                  onClick={() => router.push("/login")}
                  text="Log in"
                  colorDefault
                ></ClickableText>
              </div>
              <Input
                type="text"
                placeholder="AnyaTaylor"
                label="Username (Public)"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <Input
                type="text"
                placeholder="ataylorjoy@gmail.com"
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="flex items-center justify-evenly">
                <div>
                <Input
                  type="password"
                  placeholder="password"
                  label="Password"
                  value={pass}
                  onChange={(event) => setPass(event.target.value)}
                />
                </div>
                <div>
                <Input
                  type="password"
                  placeholder="passwords must match"
                  label="Retype"
                />
                </div>
              </div>
              <div className="flex justify-between items-center w-full mt-5">
                <Checkbox label="Keep me logged in" />
                <ButtonPrimary
                  text="Register"
                  onClick={() => {createUserWithEmailAndPassword(email, pass)}}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full bg-slate-50 flex justify-center items-center">
            <Image
              src="/LogoMark.png"
              alt="CodeConnect Logo"
              width="256"
              height="256"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
