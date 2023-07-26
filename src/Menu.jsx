import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
      <div className="navbar">
        <div>
          <NavLink to="/blog" className="navbar-text">
            BLOG
          </NavLink>
          <NavLink to="/review" className="navbar-text">
            REVIEW
          </NavLink>
          <NavLink to="/story" className="navbar-text">
            STORY
          </NavLink>
        </div>

        <div>
          <NavLink to="/shareYourStory" className="navbar-text">
            SHARE YOUR STORY
          </NavLink>
          <NavLink to="/blog" className="navbar-text">
            BACK
          </NavLink>

          {/*    <NavLink to="/user/anil" className="navbar-text">
            Anil
          </NavLink>
          <NavLink to="/user/peter" className="navbar-text">
            Peter
          </NavLink>

  */}
        </div>
      </div>
    </div>
  );
}

export default Menu;
