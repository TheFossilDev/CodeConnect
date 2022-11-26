import { Fragment } from "react";
import {
  FaQuestionCircle,
  FaCheckCircle,
  FaCogs,
  FaHandPaper,
  FaRegPlusSquare,
} from "react-icons/fa";
import ClickableText from "../UI/Buttons/ClickableText";

const ProjTableElement = (props) => {
  return (
      <tr key={props.id} className="bg-white border-gray-200 border-y-2 hover:bg-gray-100">
        <td className="flex justify-center py-6">
          {
            props.project.status === "done" ? (
              <FaCheckCircle size="25" /> // if
            ) : props.project.status === "inProgress" ? (
              <FaCogs size="25" /> // else if
            ) : props.project.status === "seekingContributors" ? (
              <FaHandPaper size="25" /> // else if
            ) : null // else
          }
        </td>
        <td>
          <ClickableText
            colorDefault
            text={props.project.title}
            href="https://google.com"
          />
        </td>
        <td className="text-gray-500">{props.project.description}</td>
        <td className="flex justify-evenly items-center">
          {props.project.languages.map((language, i) => {
            return <Fragment key={i}>{language}</Fragment>
          })}
        </td>
      </tr>
  );
};

export default ProjTableElement;
