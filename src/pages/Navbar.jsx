import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import NavBg from "../assets/images/grovy-bg.jpg";
import Logo from "../assets/images/logo.jpg";
import NavItem from "../components/NavItem";

const Navbar = () => {
  return (
    <div>
      <div className=" bg-gray-700 border-t-[3px] border-[#3BBFAD] h-28 w-full z-[1000]  ">
          <div className="mt-5">
            <NavItem />
          </div>
      
      </div>
    </div>
  );
};

export default Navbar;
