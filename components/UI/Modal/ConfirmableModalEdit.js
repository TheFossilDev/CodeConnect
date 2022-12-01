import Modal from "./Modal";
import { RiCloseFill } from "react-icons/ri"
import ButtonSecondary from "../Buttons/ButtonSecondary";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const ConfirmableModal = props => {
  const handleConfirm = () => {
    props.onConfirm()
    props.onClose()
  };
  return (
    <Modal className={props.className} onBackgroundClick={props.onClose}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">{props.header}</h1>
        <RiCloseFill cursor="pointer" onClick={props.onClose} size="2rem" />
      </div>
      {props.children}
      <div className="w-full flex justify-end">
        <ButtonSecondary onClick={props.onClose} text="Cancel"/>
        <ButtonPrimary onClick={handleConfirm} text="Edit Profile"/>
      </div>
    </Modal>
  );
};

export default ConfirmableModal;