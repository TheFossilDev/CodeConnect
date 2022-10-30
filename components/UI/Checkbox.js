const Checkbox = props => {
  return (
    <div className="w-fit p-1 flex justify-center items-center">
      <label className="mr-2">{props.label}</label>
      <input className="w-5 h-5" type="checkbox" />
    </div>
  );
};

export default Checkbox;