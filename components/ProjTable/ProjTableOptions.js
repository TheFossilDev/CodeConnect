import { FaSearch } from "react-icons/fa";
import FilterDropdown from "../UI/FilterDropdown";

const ProjTableOptions = props => {
  return (
    <div className="flex justify-start items-center">
      <div className="flex justify-start items-center bg-gray-100 w-80 py-2 px-4 mr-2 rounded-md">
        <FaSearch />
        <input className="bg-gray-100 w-80" placeholder="Search titles" type="text" />
      </div>
      <div className="flex justify-start items-center">
        <FilterDropdown label="Languages" />
        <FilterDropdown label="Status" />
        <FilterDropdown label="Tags" />
        <FilterDropdown label="Other filters" />
      </div>
    </div>
  );
};

export default ProjTableOptions;