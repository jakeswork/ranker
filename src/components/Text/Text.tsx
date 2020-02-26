import React, { FC, HTMLAttributes } from "react";
import { Classes } from "jss";
import cx from "classnames";

export interface ITextProps extends HTMLAttributes<HTMLElement> {
  classes: Classes<"h1" | "h2" | "h3" | "caption" | "p">;
  children?: any;
  h1?: Boolean;
  h2?: Boolean;
  h3?: Boolean;
  caption?: Boolean;
  light?: Boolean;
}

const Text: FC<ITextProps> = ({
  classes = {},
  children = null,
  h1 = false,
  h2 = false,
  h3 = false,
  caption = false,
  className = '',
  ...props
}) => {
  if (h1) return <h1 className={cx(classes.h1, className)} {...props}>{ children }</h1>;

  if (h2) return <h2 className={cx(classes.h2, className)} {...props}>{ children }</h2>;

  if (h3) return <h3 className={cx(classes.h3, className)} {...props}>{ children }</h3>;

  if (caption) return <span className={cx(classes.caption, className)} {...props}>{ children }</span>;

  return <p className={cx(classes.p, className)} {...props}>{ children }</p>;
};

export default Text;
