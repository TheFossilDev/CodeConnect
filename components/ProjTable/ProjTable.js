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
import { Fragment } from "react";

const projects = [
  {
    id: v4(),
    status: "done",
    title: "GPT-4",
    description:
      "The successor to world class NLP engine GPT-3 created by OpenAI",
    languages: [<FaPython size="25" />, <IoLogoJavascript size="25" />, <FaRProject size="25" />],
  },
  {
    id: v4(),
    status: "inProgress",
    title: "TikTok Downloader",
    description: "Downloads tikTok videos automatically",
    languages: [<FaSwift size="25" />, <FaJava size="25" />, <GrMysql size="25" />],
  },
  {
    id: v4(),
    status: "seekingContributors",
    title: "Youtube Downloader",
    description: "Downloads youtube videos automatically",
    languages: [<FaSwift size="25" />, <FaJava size="25" />, <GrMysql size="25" />],
  },
];
const ProjTable = (props) => {
  return (
    <div>
      <table className="mt-5 table-auto w-full">
        <thead>
          <tr>
            <th className="text-base text-gray-700 text-left">Info</th>
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
