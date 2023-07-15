import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./module/private/PrivateRoutes";
import PublicRoutes, {
  authPath,
  getAuthPath,
} from "./module/public/PublicRoutes";
import { ModalProvider } from "./component/Modal/modal.context";
import Modal from "./component/Modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Modal />
        <Routes>
          <Route path="/*" element={<PrivateRoutes />} />
          <Route path={getAuthPath("/*")} element={<PublicRoutes />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
