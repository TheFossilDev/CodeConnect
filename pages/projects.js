import NavBar from "../components/UI/NavBar";
import {
  FaCheckCircle,
  FaCogs,
  FaHandPaper,
  FaRegPlusSquare,
  FaJava,
  FaPython,
  FaRProject,
  FaSwift,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io"
import { GrMysql } from "react-icons/gr"
import ClickableText from "../components/UI/Buttons/ClickableText";
import { useEffect, useState } from "react";
import ConfirmableModal from "../components/UI/Modal/ConfirmableModal";
import Input from "../components/UI/FormElements/Input";
import TextArea from "../components/UI/FormElements/TextArea";
import Checkbox from "../components/UI/Checkbox";
import { firebaseAuth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import axios from "axios";





const Projects = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  const [tableData, setTableData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!loading && error != null) {
      console.error(error);
    } else if (!loading && user != null) {
      fetch("http://127.0.0.1:8000/project/view/")
      .then((data) => data.json())
      .then((data) => setTableData(data))

      console.log(user);
    } else if (!loading) {
      router.push("/login")
    }
  }, [user, loading, error]);
  const projects = [];
  tableData.forEach(element => {
    let iconLanguages = []
    if(element.users == user.uid){
      element.languages.forEach(language => {
        iconLanguages.push(language === "Python" ? (
          <FaPython size="25" />
        ) : language === "JavaScript" ? (
          <IoLogoJavascript size="25" />
        ) : language === "Java" ? (
          <FaJava size="25" />
        ) : language === "SQL" ? (
          <GrMysql size="25" />
        ) : language === "Swift" ? (
          <FaSwift size="25" />
        ) : language === "R" ? (
          <FaRProject size="25" />
        ) : language
      )});
     element.languages = iconLanguages;
      projects.push({id:element.id, status:"inProgress", title:element.title, description:element.description, languages:element.languages})
    }
    
    
  });

  

  const onCloseModal = () => {
    setAddingProject(false);
  };
  const onOpenModal = () => {
    setAddingProject(true);
  };

  const [addingProject, setAddingProject] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [languages, setLanguages] = useState("");

  
  const handleCreateProject = () => {
    
    axios.post("http://127.0.0.1:8000/project/create/", {
      title: title,
      description: description,
      languages: languages.split(" "),
      users: user.uid
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });  

  
    router.reload("/projects");
  };

  if (!loading && user != null) return (
    <div className="bg-slate-50 h-screen">
      {addingProject ? (
        <ConfirmableModal
          className="w-2/3"
          onClose={onCloseModal}
          onConfirm={handleCreateProject}
          header="Create project"
        >
          <form className="flex justify-evenly items-start">
            <div>
              <Input type="text" label="Project Title" placeHolder="Required" value={title} onChange={(event) => setTitle(event.target.value)} />
              <TextArea label="Project Description" value={description} onChange={(event) => setDescription(event.target.value)} ></TextArea>
              <Checkbox label="Is this project beginner friendly?"/>
              <Input type="text" label="Public Repository Link" />
            </div>
            <div>
              <Input type="text" label="Languages used" placeHolder="Separate with spaces" value={languages} onChange={(event) => setLanguages(event.target.value)} />
              <Input type="text" label="Project tags" placeHolder="Separate with spaces" />
              <Checkbox label="Open to mentoring?" />
            </div>
          </form>
        </ConfirmableModal>
      ) : null}
      <NavBar />
      <div className="m-auto w-2/3 flex flex-col justify-start items-center">
        <div className="w-full my-10 flex justify-between items-center">
          <h1 className="text-3xl">Your projects</h1>
          <div>
            <div
              onClick={onOpenModal}
              className="flex justify-between items-center w-40 h-12 bg-sky-500 rounded-lg p-4 hover:bg-sky-300 hover:cursor-pointer"
            >
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
            {projects.map((project, i) => {
              return (
                <tr
                  className="bg-white border-gray-200 border-y-2 hover:bg-gray-100"
                  key={i}
                >
                  <td className="flex justify-center py-6">
                    {
                      project.status === "done" ? (
                        <FaCheckCircle size="25" /> // if
                      ) : project.status === "inProgress" ? (
                        <FaCogs size="25" /> // else if
                      ) : project.status === "seekingContributors" ? (
                        <FaHandPaper size="25" /> // else if
                      ) : null // else
                    }
                  </td>
                  <td>
                    <ClickableText
                      colorDefault
                      text={project.title}
                      href="https://google.com"
                    />
                  </td>
                  <td className="text-gray-500">{project.description}</td>
                  <td className="flex justify-evenly items-center">{project.languages}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
