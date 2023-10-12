import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
const NavItem = () => {
  return (
    <div className="navbar text-black xl:text-white  container mx-auto px-5">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
                  <a>Aura</a>
                </li>
                <li>
                  <a>Alcove</a>
                </li>
                <li>
                  <a>Aria</a>
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

      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a className="hover:text-white">HOME</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="hover:text-white">ABOUT</summary>
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
              <summary className="hover:text-white">Projects</summary>
              <ul className="p-2 text-black">
                <li>
                  <a>Aura</a>
                </li>
                <li>
                  <a>Alcove</a>
                </li>
                <li>
                  <a>Aria</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="hover:text-white">EVENTS</a>
          </li>
          <li>
            <a className="hover:text-white">TESTIMONIALS</a>
          </li>
          <li>
            <a className="hover:text-white">BLOG</a>
          </li>
          <li>
            <a className="hover:text-white">CONTACT</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-neutral" onClick={() => signOut(auth)}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default NavItem;
