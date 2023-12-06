import React from "react";
import "./container.css";
import procent from "../../img/procent.png";

const Container = () => {
  return (
    <div className="container">
      <div className="finances_procent">
        <img src={procent} alt="procent" />
      </div>

      <div className="finances_description">
        <h1>The best finance stack for enterpreneurs </h1>
        <p>
          70 % of companies switch to us from their DIY or legacy system. Now,
          get your bookkeeping, tax prep and CFO problems,solved.Complete our{" "}
          <a href=" ">contact form</a>, and find out why 9 out of 10 customers
          recomenddend us.
        </p>
      </div>
    </div>
  );
};
export default Container;
