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
      <div className="relative border-t-[3px] border-[#3BBFAD] h-28 w-full">
        <div>
          <img src={NavBg} alt="" />
        </div>
        <div className="absolute top-3 pl-5 flex  ">
          <img src={Logo} alt="" />

          <div className="flex gap-4 text-white">
            <p>
              QUESTIONS? CALL: <b>+971-4-2323224</b>
            </p>
            <div className="cursor-pointer flex gap-4">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
          <div className="mt-5">
            <NavItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
