import React from "react";

const Sw = ({ description, title, name }) => {
  return (
    <div className="switch_text">
      <h1>{title}</h1>
      <h3>{name}</h3>
      <div tabIndex={0} dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default Sw;
