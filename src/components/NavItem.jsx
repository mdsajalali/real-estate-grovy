import React from "react";

const NavItem = () => {
  return (
    <div className="navbar text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>ABOUT</a>
              <ul className="p-2">
                <li>
                  <a>About the Developer</a>
                </li>
                <li>
                  <a>Why Grovy</a>
                </li>
                <li>
                  <a>The Management</a>
                </li>
                <li>
                  <a>About Grovy India</a>
                </li>
              </ul>
            </li>

            <li>
              <a>PROJECTS</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>EVENTS</a>
            </li>
            <li>
              <a>TESTIMONIALS</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>HOME</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>ABOUT</summary>
              <ul className="p-2 w-56 text-black">
                <li>
                  <a>About the Developer</a>
                </li>
                <li>
                  <a>Why Grovy</a>
                </li>
                <li>
                  <a>The Management</a>
                </li>
                <li>
                  <a>About Grovy India</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Projects</summary>
              <ul className="p-2 text-black">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>EVENTS</a>
          </li>
          <li>
            <a>TESTIMONIALS</a>
          </li>
          <li>
            <a>BLOG</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#016B98] text-white">PAYMENTS</a>
      </div>
    </div>
  );
};

export default NavItem;
