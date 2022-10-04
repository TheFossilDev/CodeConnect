import ButtonSmall from "./ButtonSmall";

const ProjectCard = (props) => {
  return (
    <div className="flex justify-between border-solid rounded-lg border-2 border-slate-300 bg-white shadow-md">
      <div>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div>
        <p>{props.workType}</p>
        <ButtonSmall text="See More"/>
      </div>
    </div>
  )
}

export default ProjectCard;