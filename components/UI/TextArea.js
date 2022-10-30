const TextArea = (props) => {
  return (
    <>
      {props.label ? <label htmlFor={props.for}>{props.label}</label> : null}
      <textarea
        rows={props.rows}
        cols={props.cols}
        className="border-2 rounded-md"
      ></textarea>
    </>
  );
};

export default TextArea;
