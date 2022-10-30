const ModalBackground = props => {
  return (
    <div onClick={props.onClick} className="bg-black absolute opacity-25 w-screen h-screen">{props.children}</div>
  );
};

export default ModalBackground;