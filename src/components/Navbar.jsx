import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav>
      <div className="navbar">
        <a href="#" className="logo">
          ReeRoute
        </a>
        <ul className="nav-links">
          <li className={activeTab === "Home" ? "active" : ""}>
            <a href="#" onClick={() => handleTabClick("Home")}>
              Home
            </a>
          </li>
          <li className={activeTab === "About" ? "active" : ""}>
            <a href="#" onClick={() => handleTabClick("About")}>
              About
            </a>
          </li>
          <li className={activeTab === "How It Works" ? "active" : ""}>
            <a href="#" onClick={() => handleTabClick("How It Works")}>
              How It Works
            </a>
          </li>
          <li className={activeTab === "Contact" ? "active" : ""}>
            <a href="#" onClick={() => handleTabClick("Contact")}>
              Contact
            </a>
          </li>
        </ul>
        <a href="#" className="request-quote-button">
          Request Quote
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
