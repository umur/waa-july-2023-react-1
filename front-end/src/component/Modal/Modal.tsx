import { useContext } from "react";
import { ModalContext } from "./modal.context";
import { modalActions } from "./modal.reducer";

function Modal() {
  const { state, dispatch } = useContext(ModalContext);

  if (!state.show) {
    return <></>;
  }

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{state.config?.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                dispatch({
                  type: modalActions.HIDE,
                });
              }}
            />
          </div>
          <div className="modal-body">
            <p>{state.config?.body}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className={`btn ${state.config?.cancelBtnClass}`}
              onClick={() => {
                dispatch({
                  type: modalActions.HIDE,
                });

                state.config?.onCancel && state.config?.onCancel();
              }}
            >
              {state.config?.cancelBtnText}
            </button>
            <button
              type="button"
              className={`btn ${state.config?.okBtnClass}`}
              onClick={state.config?.onOk}
            >
              {state.config?.okBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
