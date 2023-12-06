import React from "react";
import "./switch.css";
import Button from "../button/button";
import software from "../../img/software.png";
import cashflow from "../../img/cashflow.png";
import support from "../../img/support.png";
import startup from "../../img/startup.png";
import scaleup from "../../img/scaleup.png";
import growth from "../../img/growth.png";
import Sw from "./sw";

const Switch = () => {
  return (
    <div className="switch_text">
      <Sw title="Why Switch?" />
      <div className="finance_switch">
        <div className="finance_software">
          <img src={software} alt="software" />
          <h3>Powerful software</h3>
          <Sw
            description="
            <p>Included in our service,each customer gets in-house software to
            access live <a href='#'>financial dashboards</a> and real-time management
            reports</p>"
          />
        </div>
        <div className="finance_cashflow">
          <img src={cashflow} alt="cashflow" />
          <Sw name="Track cashflow" />
          <Sw
            description="Stay on top of your working capital,<a href=''#/>taxes</a> and cashflow, to
            ensure your business is performing at its best"
          />
        </div>

        <div className="finance_support">
          <img src={support} alt="support" />
          <Sw name="Awarding winning support" />
          <Sw description="Expect the best from us. Get a dedicated finance team  that will handle all your accounting, R&D credits and CFO needs." />
        </div>
      </div>
      <div className="button">
        <Button
          text="Discover What we do"
          background="pink"
          borderRadius="20px"
          height="40px"
          width="170px"
          borderColor="pink"
        />
      </div>

      <div className="finances">
        <Sw title="Plans built for growth" />
        <div className="finance_switch">
          <div className="finance_software">
            <img src={startup} alt="startup" />
            <h3>Early stage startup</h3>
            <Sw
              description="
           Need your accounting system set up?
           Learn financial best practice and prime your business for the next stage growth. We get you moving quickly with an accounting solution that does what you need"
            />
          </div>
          <div className="finance_cashflow">
            <img src={scaleup} alt="scaleup" />
            <Sw name="Scale up" />
            <Sw description="Spend less time worrying about your finances and more time shaping your company's future.Get your bookkeeping, R&D credits and CFO problems,solved." />
          </div>

          <div className="finance_support">
            <img src={growth} alt="growth" />
            <Sw name="High growth" />
            <Sw description="Gain the financial accuracy, visibility, and real-time analysis you need to make smarter decisions,drive efficiency, and achieve total organizational alignment" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Switch;
