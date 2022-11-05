const ButtonSmall = props => {
  return (
    <div onClick={props.onClick} className="hover:bg-sky-500 bg-sky-400 m-w-20 m-h-10 w-fit h-fit p-3 m-2 cursor-pointer rounded-lg flex justify-center">
      <button className="text-white font-bold text-center">{props.text}</button>
    </div>
  );
};

export default ButtonSmall;