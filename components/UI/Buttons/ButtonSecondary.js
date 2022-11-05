const ButtonSecondary = props => {
  return (
    <div onClick={props.onClick} className="m-w-20 m-h-10 w-fit h-fit p-3 m-2 cursor-pointer border-2 border-gray-600 rounded-lg flex justify-center">
      <button className="text-gray-600 font-bold text-center">{props.text}</button>
    </div>
  );
};

export default ButtonSecondary;