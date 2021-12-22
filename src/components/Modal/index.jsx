import Button from "components/Button";
import { useSelector } from "react-redux";

const Modal = () => {
    const { openModal, modalOptions } = useSelector((state) => state.products);

    const modalType = {
        success: "bg-success",
        alert: "bg-warning",
        error: "bg-danger",
    };

    return openModal ? (
        <div className="modal-container ">
            <div className="w-50 bg-white rounded">
                <div
                    className={`w-100 rounded-top ${
                        modalType[modalOptions.type]
                    }`}
                    style={{ height: "10px" }}
                />
                <div className="px-4 py-4 form-label">
                    {modalOptions.message}
                </div>
                <div className="d-flex flex-row-reverse justify-content-between pe-2 pb-2">
                    {modalOptions
                        ? modalOptions.actions.map((option) => {
                              return (
                                  <Button
                                      key={option.id}
                                      id={option.id}
                                      className={option.className}
                                      onClick={option.onClick}
                                      title={option.title}
                                  />
                              );
                          })
                        : null}
                </div>
            </div>
        </div>
    ) : null;
};

export default Modal;
