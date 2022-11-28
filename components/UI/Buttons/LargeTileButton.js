const LargeTileButton = props => {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className={`m-2 flex justify-center items-center bg-gradient-to-tr cursor-pointer ${props.from != undefined ? props.from : "from-blue-400"} ${props.to != undefined ? props.to : "to-green-400"} w-52 h-52 rounded-2xl shadow-sm`}>
        {props.children}
      </div>
      <h1 className="text4xl font-semibold text-center">{props.label}</h1>
    </div>
  );
};

export default LargeTileButton;