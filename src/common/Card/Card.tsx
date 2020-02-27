import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { Classes } from "jss";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  classes: Classes<"root">;
  className?: string;
  children?: any;
}

const Card: FC<ICardProps> = ({
  classes = {},
  children = null,
  className = "",
  ...props
}) => (
  <div className={classNames(classes.root, className)} {...props}>
    {children}
  </div>
);

export default Card;
