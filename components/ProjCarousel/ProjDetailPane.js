import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import { FaPython, FaJava, FaSwift, FaCogs, FaUserFriends } from "react-icons/fa";
import ButtonSecondary from "../UI/Buttons/ButtonSecondary"

const ProjDetailPane = props => {
  return (
    <div className="flex flex-col justify-evenly items-start w-1/2 h-fit shadow-xl border-gray-100 border-2 rounded-lg p-3">
      <div className="flex justify-start items-center py-2">
        <FaCogs color="gray" size="30" />
        <h3 className="ml-2 text-gray-600 text-xl">In Progress</h3>
      </div>
      <h2 className="text-3xl py-2">VLC Media Player</h2>
      <p className="">VLC Media Player is an open-source media player designed to be the most compatible media player across devices.</p>
      <div className="flex justify-start items-center w-fit py-2">
        <FaJava color="lightblue" size="40" />
        <FaSwift color="lightblue" size="40"/>
        <FaPython color="lightblue" size="40"/>
      </div>
      <div className="w-full">
        <div className="flex justify-start items-center">
          <FaUserFriends color="gray"/>
          <p className="text-gray-500">10,432 Contributors</p>
        </div>
        <div className="flex justify-end items-center w-full">
          <ButtonSecondary text="Ignore" />
          <ButtonPrimary text="Join" />
        </div>
      </div>
    </div>
  );
};

export default ProjDetailPane;