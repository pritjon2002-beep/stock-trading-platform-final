import React, { useState , useEffect, useRef } from "react"; //hooks
import { Link, Navigate, useNavigate } from "react-router-dom";




const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);
  const navigate = useNavigate();

    const userName = localStorage.getItem("name") || "User";
  const userEmail = localStorage.getItem("email") || "";
  const firstLetter = userName.charAt(0).toUpperCase();

  const handleMenuClick = (index) => setSelectedMenu(index);

  
  const logout = () => {
    localStorage.clear();
    navigate("/login");
};

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logokite" style={{ width: "55px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
    <div className="profile-dropdown" ref={dropdownRef}>
          <div className="profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
            <div className="avatar">{firstLetter}</div>
           
          </div>

          {isProfileDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-header">
                <div className="avatar-large">{firstLetter}</div>
                <div className="dropdown-info">
                  <p className="dropdown-name">{userName}</p>
                  <p className="dropdown-email">{userEmail}</p>
                </div>
              </div>
              <hr />
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          )}
          </div>
        
      </div>
    </div>
  );
};

export default Menu;
