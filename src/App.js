/* import React, { useState } from 'react'; */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductListPage from './pages/ProductListPage';
import Product from './pages/Product';

const App = () => {
/*   const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false); */

/*   const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  }; */

  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <NavBar />
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h2>App</h2>
              </div>
              <div className="card-body">
                {/* <div className="text-center mb-4">
                  <button className="btn btn-primary mr-2" onClick={handleLoginClick}>
                    Login
                  </button>
                  <button className="btn btn-primary" onClick={handleRegisterClick}>
                    Register
                  </button>
                </div>
                {showLogin && <Login />}
                {showRegister && <Register />} */}
                <Routes>
                  <Route path="/" element={<ProductListPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/products/:productId" element={<Product />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div></BrowserRouter>
  );
};

export default App;
