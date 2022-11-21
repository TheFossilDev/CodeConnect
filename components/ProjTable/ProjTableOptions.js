import { FaSearch } from "react-icons/fa";

const ProjTableOptions = props => {
  return (
    <>
      <div className="flex justify-start items-center bg-gray-100 w-80 py-2 px-4 rounded-md">
        <FaSearch />
        <input className="bg-gray-100 w-80" placeholder="Search titles" type="text" />
      </div>
      <div></div>
    </>
  );
};

export default ProjTableOptions;