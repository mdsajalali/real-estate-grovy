import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
const NavItem = ({ user }) => {
  return (
    <div className="container navbar mx-auto  px-5 text-black xl:text-white">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost 2xl:hidden">
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
          className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
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

      <div className="navbar-start hidden 2xl:flex ">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a className="hover:text-white">HOME</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="hover:text-white">ABOUT</summary>
              <ul className="w-56 p-2 text-black">
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

      <div className="absolute right-10 md:right-24 2xl:right-0 2xl:px-52">
        <div className="dropdown dropdown-hover">
          <div tabindex="0" role="button" className="m-1">
            <img
              className="mx-auto my-2 w-10 rounded-full xl:my-0"
              src={user ? user?.photoURL : "https://i.ibb.co/QXbhtw0/user.png"}
              alt=""
            />
          </div>
          <ul
            tabindex="0"
            className="menu dropdown-content rounded-box right-0 z-[1]   w-52 bg-[#374151] p-2 text-center shadow "
          >
            <li className="my-2 text-white">{user?.displayName}</li>
            <hr />
            <button
              className="btn btn-neutral my-2"
              onClick={() => signOut(auth)}
            >
              LogOut
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
