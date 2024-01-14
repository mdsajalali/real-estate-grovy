import logo from "../assets/images/logo.jpg";

const Footer = () => {
  const getFullYear = new Date().getFullYear();

  return (
    <div className="bg-gray-800">
      <div className="container mx-auto">
        {/* Main Footer */}
       <footer className="footer p-10 bg-gray-800 text-white">
  <aside>
    <img className="w-40" src={logo} alt="" />
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

        {/* Secondary Footer */}
        <footer className="footer footer-center p-4 bg-gray-800 text-white">
          <aside>
            <p>Copyright © {getFullYear} - All rights reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
