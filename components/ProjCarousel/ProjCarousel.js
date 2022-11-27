import ProjCarouselNav from "./ProjCarouselNav";
import ProjDetailPane from "./ProjDetailPane";

const DUMMY_REC_PROJECTS = [
  {
    status: "In Progress"
  }
]

const ProjCarousel = props => {
  return (
    <div>
      <h1 className="text-3xl my-8">Recommended projects based on your skills</h1>
      <div className="flex justify-center items-center">
        {/* Individual panes, left and right are hidden */}
        <ProjDetailPane />
      </div>
      <ProjCarouselNav count={5}/>
    </div>
  );
};

export default ProjCarousel;