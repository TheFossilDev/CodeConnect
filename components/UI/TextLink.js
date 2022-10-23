const TextLink = props => {
  return (
    <a href={props.href} className="m-2 font-semibold hover:text-indigo-400">{props.text}</a>
  );
};

export default TextLink;