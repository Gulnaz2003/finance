import "./Header_menu.css";
import logo from "../../img/logo.png";
import Button from "../button/button";

const HeaderMenu = () => {
  return (
    <header>
      <div className="header_logo">
        <img src={logo} alt="logo" />
        <h3>
          Accountancy <br /> Cloud{" "}
        </h3>
      </div>
      <div className="header_menu">
        <a href="home.url">Home </a>
        <a href="works.url">How it works</a>
        <a href="what.url"> What we do</a>
        <a href="help.url"> Who we help</a>
        <a href="resources.url"> Resources</a>
        <Button
          background="white"
          text="Login"
          borderRadius="20px"
          width="70px"
        />
        <Button
          color="white"
          background="black"
          text="Talk to an Expert"
          borderRadius="20px"
          height="40px"
          width="130px"
        />
      </div>
    </header>
  );
};

export default HeaderMenu;
