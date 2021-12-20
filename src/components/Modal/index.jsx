import { useSelector } from "react-redux";

const Modal = () => {
    const { openModal, modalOptions } = useSelector((state) => state.products);

    const modalType = {
        success: "bg-success",
        alert: "bg-warning",
        error: "bg-danger",
    };

    return (
        <div className="modal-container ">
            <div className="w-25 bg-white rounded">
                <div
                    className={`w-100 rounded-top ${
                        modalType[modalOptions.type]
                    }`}
                    style={{ height: "10px" }}
                />
                <div>{modalOptions.message}</div>
                <div></div>
            </div>
        </div>
    );
};

export default Modal;
