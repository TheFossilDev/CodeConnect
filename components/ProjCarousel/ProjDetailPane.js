import ButtonPrimary from "../UI/Buttons/ButtonPrimary";
import { FaPython, FaJava, FaSwift } from "react-icons/fa";
import ButtonSecondary from "../UI/Buttons/ButtonSecondary"

const ProjDetailPane = props => {
  return (
    <div className="flex flex-col justify-evenly items-start w-1/2 h-fit shadow-sm rounded-lg border-solid border-gray-600 border-2">
      <h2>VLC Media Player</h2>
      <p>VLC Media Player is an open-source media player designed to be the most compatible media player across devices.</p>
      <div className="flex justify-start items-center">
        <FaJava />
        <FaSwift />
        <FaPython />
      </div>
      <div>
        <p>10,432 Contributors</p>
        <div>
          <ButtonSecondary text="Ignore" />
          <ButtonPrimary text="Join" />
        </div>
      </div>
    </div>
  );
};

export default ProjDetailPane;