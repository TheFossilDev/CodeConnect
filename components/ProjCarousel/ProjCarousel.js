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
      <h1>Recommended projects based on your skills</h1>
      <div>
        {/* Individual panes, left and right are hidden */}
        <ProjDetailPane />
      </div>
      <ProjCarouselNav />
    </div>
  );
};

export default ProjCarousel;