import React from "react";

const Button = (props) => {
  return (
    <button
      style={{
        background: props.background,
        color: props.color,
        borderRadius: props.borderRadius,
        height: props.height,
        width: props.width,
        borderColor: props.borderColor,
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
