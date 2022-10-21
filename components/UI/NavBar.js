import Image from "next/image";
import { FaBars } from "react-icons/fa";

const NavBar = props => {
  return (
    <div className="flex justify-between bg-gray-50">
      <div>
        <Image src="/Logo.png" width="64px" height="64px" />
      </div>
      <div>
        <FaBars />
      </div>
    </div>
  );
};

export default NavBar;