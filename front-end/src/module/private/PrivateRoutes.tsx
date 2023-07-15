import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import Navbar from "../../component/Navbar/Navbar";
import { helper } from "../../util/helper";
import { authService } from "../public/auth/service/auth.service";
import ProductDetail, {
  productAddPath,
  productEditPath,
} from "./product/screen/ProductDetail";
import ProductList, { productListPath } from "./product/screen/ProductList";

function PrivateRoutes() {
  useEffect(() => {
    if (!helper.isTokenValid()) {
      authService.logout();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="mt-5 m-auto">
          <Routes>
            <Route path={productListPath} element={<ProductList />} />
            <Route path={productAddPath} element={<ProductDetail />} />
            <Route path={productEditPath} element={<ProductDetail />} />
            <Route
              path="*"
              element={<Navigate to={productListPath} replace />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default PrivateRoutes;
