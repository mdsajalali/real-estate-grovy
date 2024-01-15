import logo from "../assets/images/logo.jpg";

const Footer = () => {
  const getFullYear = new Date().getFullYear();

  return (
    <div className="bg-gray-800">
      <div className="container mx-auto">
        {/* Main Footer */}
        <footer className="footer bg-gray-800 p-10 text-white">
          <aside>
            <img className="w-40" src={logo} alt="" />
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link-hover link">Branding</a>
            <a className="link-hover link">Design</a>
            <a className="link-hover link">Marketing</a>
            <a className="link-hover link">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Contact</a>
            <a className="link-hover link">Jobs</a>
            <a className="link-hover link">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link-hover link">Terms of use</a>
            <a className="link-hover link">Privacy policy</a>
            <a className="link-hover link">Cookie policy</a>
          </nav>
        </footer>

        {/* Secondary Footer */}
        <footer className="footer footer-center bg-gray-800 p-4 text-white">
          <aside>
            <p>
              Copyright © {getFullYear} - All rights reserved by ACME
              Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
