import Image from "next/image";
import TextLink from "./TextLink";
import { useSignOut } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";

import { firebaseAuth } from "../../firebase/clientApp";

const handleSignOut = () => {
  signOut(firebaseAuth).then(() => {
    console.log("Signed out");
  }).catch((error) => {
    console.error(error);
  });
};

const NavBar = props => {
  // const [signOut, loading, error] = useSignOut(firebaseAuth);

  return (
    <div className="flex justify-center bg-gray-50 border-b-2">
      <div className="flex justify-between w-2/3">
        <div className="flex justify-start items-center">
          <Image src="/Logo.png" width="64" height="64" alt="CodeConnect logo of blue atom"/>
          <TextLink text="Profile" href="/profile" />
          <TextLink text="Find Projects (Coming soon!)" href="/projects" />
        </div>
        <div className="flex justify-start items-center">
          <TextLink text="Logout" onClick={handleSignOut}/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;