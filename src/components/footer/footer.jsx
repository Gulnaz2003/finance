import "./footer.css";
import footer_logo from "../../img/footer_logo.png";
import acca from "../../img/acca.png";

const FooterMenu = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer_logo">
          <img src={footer_logo} alt="" />
          <h1>Your new finance team </h1>
        </div>
        <div className="footer_menu">
          <a href="this.url ">How it works</a>
          <a href="this.url"> What we do</a>
          <a href="this.url"> Who we help</a>
          <a href="this.url"> Resources</a>
          <a href="this.url"> Company</a>
        </div>

        <div className="footer_menuu">
          <div className="menu1">
            <a href="this.url">Hassle Free Switching</a>
          </div>
          <div className="menu2">
            <a href="this.url">Finance Teams</a>
            <a href="this.url"> Tax</a>
            <a href="this.url "> R&D Tax Credits</a>
            <a href=" this.url"> A platform for success </a>
            <a href="this.url "> Software Integrations </a>
          </div>
          <div className="menu2">
            <a href=" this.url">Startups</a>
            <a href="this.url ">Small Business</a>
            <a href="this.url ">Medium Business</a>
            <a href=" this.url"> CFO&Head of Finance</a>
          </div>
          <div className="menu2">
            <a href="this.url "> Case Studies</a>
            <a href=" this.url">Blogs</a>
            <a href=" this.url">Guides</a>
            <a href=" this.url"> Podcasts</a>
          </div>
          <div className="menu3">
            <a href="this.url "> About Us</a>
            <a href=" this.url">Careers</a>
            <a href=" this.url">Contact Us</a>
          </div>
        </div>
        <div className="menu4">
          <a href="this.url "> Speak Us</a>
          <a href="this.url ">Call 020 4530 8432</a>
          <a href=" this.url">Refer a Friend for 175</a>
          <a href=" this.url">Partner with us</a>
        </div>

        <div classname="menu5">
          <div className="menu">
            <p>© Accountancy Cloud 2021</p>
            <p>Privacy Policy & Cookies</p>
            <p>Terms of Service</p>
            <img src={acca} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
