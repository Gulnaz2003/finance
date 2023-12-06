import React from "react";
import "./company.css";
import vemy from "../../img/vemy.png";
import frizzenti from "../../img/frizzenti.png";
import feel from "../../img/feel.png";
import manyone from "../../img/manyone.png";
import olio from "../../img/olio.png";
import buffer from "../../img/buffer.png";
import beam from "../../img/beam.png";
import fuel from "../../img/fuel.png";
import chaser from "../../img/chaser.png";
import hub from "../../img/hub.png";
import Button from "../button/button";
const Company = () => {
  return (
    <div className="company">
      <div className="compan">
        <p>
          Join 200+ amazing
          <br /> companies
        </p>

        <img src={frizzenti} alt="" />
        <img src={vemy} alt="" />
        <img src={feel} alt="" />
      </div>
      <div className="compan">
        <img src={manyone} alt="" />
        <img src={olio} alt="" />
        <img src={buffer} alt="" />
      </div>
      <div className="compan">
        <img src={beam} alt="" />
        <img src={fuel} alt="" />
        <img src={chaser} alt="" />
      </div>

      <div className="hub">
        <div className="hub_description">
          <h1>The AS Hub</h1>
          <p>
            Explore our dedicated online resources. We've got the tips, tricks
            and online accounting know how for business success.
          </p>
          <Button
            text="View hub"
            background="pink"
            borderRadius="20px"
            width="100px"
            height="40px"
            borderColor="pink"
          />
        </div>
        <div className="hub_img">
          <img src={hub} alt="" />
        </div>
      </div>
      <div className="read">
        <h1>Ready to Switch? It's simple. </h1>
        <p>Speak to an expert today.</p>
      </div>
      <div className="buttonhub">
        <Button
          text="Get started"
          width="120px"
          color="white"
          background="black"
          borderRadius="20px"
          height="40px"
        />
      </div>
    </div>
  );
};
export default Company;
