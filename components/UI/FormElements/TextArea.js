const TextArea = (props) => {
  return (
    <>
      {props.label ? <label htmlFor={props.for}>{props.label}</label> : null}
      <textarea
        id={props.id}
        rows={props.rows}
        cols={props.cols}
        onChange={props.onChange}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        value={props.value}
        className="h-10 w-full p-1 my-1 border-2 border-solid rounded-md"
      ></textarea>
    </>
  );
};

export default TextArea;
