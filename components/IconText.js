import { AppProps } from "next/app";

const IconText = (props) => {
  if (props.reversed) {
    return (
      <div className="flex justify-items-start items-center">
        {props.icon}
        <p>{props.text}</p>
      </div>
    )
  } else {
    return (
      <div className="flex justify-items-start items-center">
        <p>{props.text}</p>
        {props.icon}
      </div>
    )
  }

}

export default IconText;