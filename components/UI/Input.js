const Input = (props) => {
  return (
    <>
      {props.label ? <label for={props.for}>{props.label}</label> : null}
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeHolder}
        className="h-10 w-full p-1 m-1 border-2 border-solid rounded-md"
      />
    </>
  );
};

export default Input;
