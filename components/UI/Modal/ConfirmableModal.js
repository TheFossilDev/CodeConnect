import Modal from "./Modal";
import { RiCloseFill } from "react-icons/ri"
import ButtonSecondary from "../../ButtonSecondary";
import ButtonSmall from "../../ButtonSmall";

const ConfirmableModal = props => {
  return (
    <Modal onBackgroundClick={props.onClose}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">{props.header}</h1>
        <RiCloseFill cursor="pointer" onClick={props.onClose} size="2rem" />
      </div>
      {props.children}
      <div className="w-full flex justify-end">
        <ButtonSecondary onClick={props.onClose} text="Cancel"/>
        <ButtonSmall onClick={props.onConfirm} text="Create Project"/>
      </div>
    </Modal>
  );
};

export default ConfirmableModal;