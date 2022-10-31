const TextLink = props => {
  const style = props.colorDefault ? "m-2 font-semibold text-sky-400 hover:text-sky-600 cursor-pointer" : "m-2 font-semibold hover:text-sky-400 cursor-pointer";

  return (
    <p className={style} onClick={props.onClick}>{props.text}</p>
  );
};

export default TextLink;