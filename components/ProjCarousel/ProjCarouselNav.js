import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaRegCircle, FaCircle } from "react-icons/fa";

const DUMMY_PROJECT_DOTS = [ "inactive", "inactive","inactive","active","inactive","inactive",]



const ProjCarouselNav = props => {
  const ICON_SIZE = 30
  const ICON_COLOR = "gray"

  return (
    <div className="flex justify-center items-center my-4">
      <FaRegArrowAltCircleLeft size={ICON_SIZE} color={ICON_COLOR} />
      {DUMMY_PROJECT_DOTS.map((dot) => {
        return dot == "active" ? (
          <FaCircle color={ICON_COLOR} size={ICON_SIZE} />
        ) : (
          <FaRegCircle color={ICON_COLOR} size={ICON_SIZE} />
        );
      })}
      <FaRegArrowAltCircleRight color={ICON_COLOR} size={ICON_SIZE} />
    </div>
  );
};

export default ProjCarouselNav;