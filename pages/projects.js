import NavBar from "../components/UI/NavBar";
import {
  FaCheckCircle,
  FaCogs,
  FaHandPaper,
  FaRegPlusSquare,
} from "react-icons/fa";
import TextLink from "../components/UI/TextLink";
import { useState } from "react";
import ConfirmableModal from "../components/UI/Modal/ConfirmableModal";
import Input from "../components/UI/Input";
import TextArea from "../components/UI/TextArea";

// TODO: Finish modal
// TODO: Create alt dummy page

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
  const onCloseModal = () => {
    setAddingProject(false);
  };
  const onOpenModal = () => {
    setAddingProject(true);
  };

  const [addingProject, setAddingProject] = useState(false);

  return (
    <div className="bg-slate-50 h-screen">
      {addingProject ? <ConfirmableModal onClose={onCloseModal} header="Create project">
        <form>
          <Input type="text" label="Project Title"/>
          <Input label="Project Description"></Input>
          <Input type="text" label="Languages used"/>
          <Input type="text" label="Project tags"/>
        </form>
      </ConfirmableModal> : null}
      <NavBar />
      <div className="m-auto w-2/3 flex flex-col justify-start items-center">
        <div className="w-full my-10 flex justify-between items-center">
          <h1 className="text-3xl">Your projects</h1>
          <div>
            <div onClick={onOpenModal} className="flex justify-between items-center w-40 h-12 bg-sky-500 rounded-lg p-4 hover:bg-sky-300 hover:cursor-pointer">
              <FaRegPlusSquare color="white" size="2rem" />
              <h2 className="text-white text-base font-semibold">
                Add Project
              </h2>
            </div>
          </div>
        </div>

        <table className="mt-5 table-auto w-full">
          <thead>
            <tr>
              <th className="text-base text-gray-700 text-left">Status</th>
              <th className="text-base text-gray-700 text-left">Title</th>
              <th className="text-base text-gray-700 text-left">Description</th>
              <th className="text-base text-gray-700 text-left">Languages</th>
            </tr>
          </thead>
          <tbody>
            {dummyProjects.map((project, i) => {
              return (
                <tr className="bg-white border-y-2 border-separate py-4 border-gray-200 hover:bg-gray-100" key={i}>
                  <td className="flex justify-center py-6">
                    {
                      project.status === "done" ? (
                        <FaCheckCircle /> // if
                      ) : project.status === "inProgress" ? (
                        <FaCogs /> // else if
                      ) : project.status === "seekingContributors" ? (
                        <FaHandPaper /> // else if
                      ) : null // else
                    }
                  </td>
                  <td>
                    <TextLink colorDefault text={project.title} href="https://google.com" />
                  </td>
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
