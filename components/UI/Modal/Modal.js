import ModalBackground from "./ModalBackground";

const Modal = props => {
  return (
    <>
      <ModalBackground onClick={props.onBackgroundClick}/>
      <div className="absolute w-fit h-fit min-h-20 min-w-20 bg-white">{props.children}</div>
    </>
  );
};

export default Modal;