import React from "react";
import "./Button.css";

function Button({
  children,
  variant,
  disabledShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
}) {
  let className = `default + " " + ${size} + " " + ${variant} + " " + ${color} + " " + ${
    disabledShadow ? "disabled-shadow" : ""
  }`;

  if (disabled) {
    className = "default disabled md" + " " + variant;
  }

  return (
    <button className={className}>
      {startIcon} {children} {endIcon}
    </button>
  );
}

Button.defaultProps = {
  children: "Default",
  variant: "",
  startIcon: " ",
  endIcon: " ",
  disabledShadow: false,
  disabled: false,
  size: "md",
  color: "default",
};

export default Button;
