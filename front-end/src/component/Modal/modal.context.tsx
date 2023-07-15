import React, { ReactNode, useReducer } from "react";
import {
  ModalAction,
  ModalState,
  initialState,
  reducer,
} from "./modal.reducer";

export const ModalContext = React.createContext<{
  state: ModalState;
  dispatch: React.Dispatch<ModalAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export interface ProviderProps {
  children: ReactNode;
}

export const ModalProvider = (props: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ModalContext.Provider>
  );
};
