import ButtonSmall from "./ButtonSmall";

const ProjectCard = (props) => {
  return (
    <div className="flex justify-between border-solid rounded-lg border-2 border-slate-300 bg-white shadow-md">
      <div>
        <h3>Project title</h3>
        <p>Data info info</p>
      </div>
      <div>
        <p>Data...</p>
        <ButtonSmall text="See More"/>
      </div>
    </div>
  )
}

export default ProjectCard;