const ButtonSmall = props => {
  return (
    <div className="hover:bg-indigo-500 bg-indigo-400 w-20 h-10 rounded-lg flex justify-center">
      <button className="text-white font-bold text-center">{props.text}</button>
    </div>
  );
};

export default ButtonSmall;