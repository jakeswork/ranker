import React, { FC, ReactChildren, ReactElement, DetailedHTMLProps, HTMLAttributes } from "react";
import { Classes } from "jss";
import classNames from "classnames";

export interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  classes: Classes<"button" | "flat" | "secondary" | "buttonIcon">;
  secondary?: boolean;
  flat?: boolean;
  children?: ReactChildren | string;
  icon?: ReactElement;
  success?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({
  classes = {},
  secondary = false,
  flat = false,
  children = null,
  icon = null,
  success = false,
  danger = false,
  disabled = false,
  className = "",
  ...props
}) => {
  let cn = classes.button;

  if (secondary) cn = classes.secondary;

  if (flat) cn = classes.flat;

  return (
    <button disabled={disabled} {...props} className={classNames(cn, className)}>
      { children }
      { icon && React.cloneElement(icon, { className: classes.buttonIcon }) }
    </button>
  );
};

export default Button;
