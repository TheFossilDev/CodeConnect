import ProjTableElement from "./ProjTableElement";
import {
  FaJava,
  FaPython,
  FaRProject,
  FaSwift,
} from "react-icons/fa";
import { v4 } from "uuid";
import { IoLogoJavascript } from "react-icons/io"
import { GrMysql } from "react-icons/gr"
import { useEffect, useState } from "react";




const ProjTable = (props) => {

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/project/view/")
    .then((data) => data.json())
    .then((data) => setTableData(data))
  }, []);
  
  
  const projects = [];

  tableData.forEach(element => {
    let iconLanguages = []
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
  });
  return (
    <div className="mb-60">
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
          {projects.map((project) => {
            return <ProjTableElement key={project.id} id={project.id} project={project} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjTable;
