import { FaCaretDown } from "react-icons/fa";

const FilterDropdown = props => {
  return (
    <div className="flex justify-center cursor-pointer items-center bg-gray-100 w-fit mx-2 py-2 px-4 rounded-md">
      <p>{props.label}</p>
      <FaCaretDown />
    </div>
  );
};

export default FilterDropdown;