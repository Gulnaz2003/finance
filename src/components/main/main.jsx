import React from "react";
import "./main.css";
import main from "../../img/main.png";
import Button from "../button/button";

const Main = () => {
  return (
    <div className="main">
      <div className="main_text">
        <h1>
          Get your <br />
          finances right{" "}
        </h1>
        <p>
          Get your finances right with Accountancy Cloud.We offer the best
          accoumting, R&D credits and CFO services for ambitious businesses who
          want to grow
        </p>

        <h3>Switching ton us is simple</h3>
        <Button
          text="Talk to us"
          color="white"
          background="black"
          borderRadius="20px"
          height="40px"
          width="100px"
        />
      </div>
      <div className="main_screen">
        <img src={main} alt="main" />
      </div>
    </div>
  );
};

export default Main;
