import { IoMdClose } from "react-icons/io";

function Modal({ isModalOpen, closeModal }) {
    return (
        <div
            className={
                isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
            }
        >
            <div className="modal-container">
                <button
                    onClick={() => closeModal(true)}
                    className="close-modal-btn"
                >
                    <IoMdClose />
                </button>
                <p>Chó Lon</p>
            </div>
        </div>
    );
}

export default Modal;
