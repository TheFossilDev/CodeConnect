const ButtonSmall = props => {
  return (
    <div className="hover:bg-sky-500 bg-sky-400 w-20 h-10 cursor-pointer rounded-lg flex justify-center">
      <button onClick={props.onClick} className="text-white font-bold text-center">{props.text}</button>
    </div>
  );
};

export default ButtonSmall;