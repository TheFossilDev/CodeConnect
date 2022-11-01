import ModalBackground from "./ModalBackground";

const Modal = (props) => {
  return (
    <>
      <ModalBackground onClick={props.onBackgroundClick} />
      <div
        className={`absolute left-0 right-0 top-20 m-auto max-w-2/3 h-fit min-h-20 min-w-20 p-10 rounded-md bg-white ${
          props.className || ""
        }`}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
