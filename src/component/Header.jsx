import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <h1>Start Bootstrap</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
