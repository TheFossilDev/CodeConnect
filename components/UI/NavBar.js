import Image from "next/image";
import TextLink from "./TextLink";
import { signOut } from "firebase/auth";

import { firebaseAuth } from "../../firebase/clientApp";
import { useRouter } from "next/router";



const NavBar = props => {
  const router = useRouter();
  const handleSignOut = () => {
    signOut(firebaseAuth).then(() => {
      console.log("Signed out");
      router.push("/login")
    }).catch((error) => {
      console.error(error);
    });
  };
  return (
    <div className="flex justify-center bg-gray-50 border-b-2">
      <div className="flex justify-between w-2/3">
        <div className="flex justify-start items-center">
          <Image src="/Logo.png" width="64" height="64" alt="CodeConnect logo of blue atom"/>
          <TextLink text="Profile" onClick={() => router.push("/profile")} />
          <TextLink text="My Projects" onClick={() => router.push("/projects")} />
          <p className="m-2 font-semibold text-gray-400 cursor-default">Find project (Coming soon!)</p>
        </div>
        <div className="flex justify-start items-center">
          <TextLink text="Logout" onClick={handleSignOut}/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;