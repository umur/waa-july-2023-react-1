export interface ModalConfig {
  title?: string;
  body?: string;
  cancelBtnText?: string;
  okBtnText?: string;
  cancelBtnClass?: string;
  okBtnClass?: string;
  onCancel?: () => void;
  onOk?: () => void;
}
