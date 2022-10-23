import NavBar from "../components/UI/NavBar";
import { FaCheckCircle, FaCogs, FaHandPaper, FaRegPlusSquare } from "react-icons/fa";
import TextLink from "../components/UI/TextLink";

const dummyProjects = [
  {
    status: "done",
    title: "GPT-4",
    description:
      "The successor to world class NLP engine GPT-3 created by OpenAI",
    languages: ["Python3", "JavaScript", "R"],
  },
  {
    status: "inProgress",
    title: "TikTok Downloader",
    description: "Downloads tikTok videos automatically",
    languages: ["Swift", "Java", "SQL"],
  },
  {
    status: "seekingContributors",
    title: "Youtube Downloader",
    description: "Downloads youtube videos automatically",
    languages: ["Swift", "Java", "SQL"],
  },
];

const projects = () => {
  return (
    <div>
      <NavBar />
      <div className="m-auto w-2/3 flex flex-col justify-start items-center">
        <h1 className="mr-auto mt-3 text-3xl font-semibold">Your projects</h1>
        
        <div>
          <div className="flex justify-center items-center w-50 h-16 border-indigo-500 border-4 rounded-lg p-4 hover:border-indigo-300 hover:cursor-pointer">
            <FaRegPlusSquare color="rgb(99, 102, 241)" size="3rem" />
            <h2 className="text-indigo-500 text-lg ml-2 font-semibold">Add Project</h2>
          </div>
        </div>
        
        
        
        
        
        <table className="mt-5 table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="text-sm text-gray-500 text-left">Status</th>
              <th className="text-sm text-gray-500 text-left">Title</th>
              <th className="text-sm text-gray-500 text-left">Description</th>
              <th className="text-sm text-gray-500 text-left">Languages</th>
            </tr>
          </thead>
          <tbody>
            {dummyProjects.map((project, i) => {
              return (
                <tr className="even:bg-gray-200 hover:bg-gray-100" key={i}>
                  <td className="flex justify-center p-3">
                    {
                      project.status === "done"
                        ? <FaCheckCircle /> // if
                        : project.status === "inProgress"
                        ? <FaCogs /> // else if
                        : project.status === "seekingContributors"
                        ? <FaHandPaper /> // else if
                        : null // else
                    }
                  </td>
                  <td><TextLink text={project.title} href="https://google.com"/></td>
                  <td className="text-gray-500">{project.description}</td>
                  <td>{project.languages}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default projects;
