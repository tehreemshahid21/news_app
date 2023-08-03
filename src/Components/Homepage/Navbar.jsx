import React from "react";
import "./Navbar.css";
import { BsNewspaper } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const handleChange = (e) => {
      if (e === "Home") {
        navigate("/");
      }
      else if (e === "Details") {
        navigate("/details");
      }
      else if (e === "Category") {
        navigate("/category");
      }
    };
    const menu = [
        { name: "Home", link: "/"},
        { name: "Details", link: "/details"},
        { name: "Category", link: "/category"},
      ];
  return (
    <div className="container">
    
        <div className="icon">
          <BsNewspaper style={{ color: "white" }} />
          <span className="logo">News-App</span>
        </div>
        <div className="list">
        {menu?.map((menuItem, index) => (
              <Link
                to={menuItem.link}
                key={index}
                onClick={() => handleChange(menuItem.name)}
              >
                {menuItem.name}
              </Link>
            ))}
        </div>
    </div>
  );
};

export default Navbar;
