import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GetAll from './GetAll';
import GetById from './GetById';
import GetByMajor from './GetByMajor';

const Navigation = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Get All</Link>
            </li>
            <li className="nav-item">
              <Link to="/getById" className="nav-link">Get By ID</Link>
            </li>
            <li className="nav-item">
              <Link to="/getByMajor" className="nav-link">Get By Major</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={GetAll} />
        <Route path="/getById" component={GetById} />
        <Route path="/getByMajor" component={GetByMajor} />
      </div>
    </Router>
  );
};

export default Navigation;
