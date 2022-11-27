import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaRegCircle, FaCircle } from "react-icons/fa";

const DUMMY_PROJECT_DOTS = [ "inactive", "inactive","inactive","active","inactive","inactive",]



const ProjCarouselNav = props => {
  const ICON_SIZE = 30


  return (
    <div className="flex justify-center items-center my-4">
      <FaRegArrowAltCircleLeft size={ICON_SIZE}/>
          {DUMMY_PROJECT_DOTS.map((dot) => {
            return (
              dot == "active" ? <FaCircle size={ICON_SIZE} /> : <FaRegCircle size={ICON_SIZE} />
            );
          })}
      <FaRegArrowAltCircleRight size={ICON_SIZE} />
    </div>
  );
};

export default ProjCarouselNav;