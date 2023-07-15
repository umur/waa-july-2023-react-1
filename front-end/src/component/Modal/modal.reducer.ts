import { ModalConfig } from "./modal.model";

export interface ModalState {
  show: boolean;
  config?: ModalConfig;
}

export interface ModalAction {
  type: string;
  config?: ModalConfig;
}

export const initialState: ModalState = {
  show: false,
  config: {
    title: "title",
    body: "body",
    cancelBtnClass: "btn btn-secondary",
    okBtnClass: "btn btn-primary",
    cancelBtnText: "Cancel",
    okBtnText: "Save",
  },
};

export const modalActions = {
  SHOW: "SHOW",
  HIDE: "HIDE",
};

export const reducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case modalActions.SHOW:
      return { show: true, config: { ...initialState.config, ...action.config } };
    case modalActions.HIDE:
      return { show: false };
    default:
      return state;
  }
};
