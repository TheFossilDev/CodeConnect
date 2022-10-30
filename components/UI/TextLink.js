const TextLink = props => {
  const style = props.colorDefault ? "m-2 font-semibold text-sky-400 hover:text-sky-600" : "m-2 font-semibold hover:text-sky-400";

  return (
    <a href={props.href} className={style}>{props.text}</a>
  );
};

export default TextLink;