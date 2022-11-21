import ProjTable from "../components/ProjTable/ProjTable";
import ProjTableOptions from "../components/ProjTable/ProjTableOptions";
import NavBar from "../components/UI/NavBar";

const browse = props => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-start items-center">
        <div className="w-2/3">
          <ProjTableOptions />
          <ProjTable />
        </div>

      </div>
    </>
  );
};

export default browse;