import { FaAppStore, FaFirefox, FaUserGraduate } from "react-icons/fa";
import ProjCarousel from "../components/ProjCarousel/ProjCarousel";
import ProjTable from "../components/ProjTable/ProjTable";
import ProjTableOptions from "../components/ProjTable/ProjTableOptions";
import LargeTileButton from "../components/UI/Buttons/LargeTileButton";
import NavBar from "../components/UI/NavBar";








const browse = (props) => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-start items-center">
        <div className="w-2/3">
          <ProjCarousel />
          <div className="flex justify-evenly items-center my-4">
            <LargeTileButton
              from="from-red-400"
              to="to-purple-500"
              label="Student Projects"
            >
              <FaUserGraduate color="white" size={"140"} />
            </LargeTileButton>
            <LargeTileButton
              from="from-orange-400"
              to="to-yellow-500"
              label="Web Projets"
            >
              <FaFirefox color="white" size={"140"} />
            </LargeTileButton>
            <LargeTileButton
              from="from-green-400"
              to="to-blue-300"
              label="iOS Apps"
            >
              <FaAppStore color="white" size={"140"} />
            </LargeTileButton>
          </div>
          <ProjTableOptions />
          <ProjTable />
        </div>
      </div>
    </>
  );
};

export default browse;
