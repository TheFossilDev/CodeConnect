import Image from "next/image";
import TextLink from "./TextLink";

const NavBar = props => {
  return (
    <div className="flex justify-center bg-gray-50 border-b-2">
      <div className="flex justify-between w-2/3">
        <div className="flex justify-start items-center">
          <Image src="/Logo.png" width="64" height="64" alt="CodeConnect logo of blue atom"/>
          <TextLink text="Profile" href="/profile" />
          <TextLink text="Find Projects (Coming soon!)" href="/projects" />
        </div>
        <div className="flex justify-start items-center">
          <TextLink text="Logout" href="/auth" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;