import React, {
  useState,
  createRef,
  HTMLAttributes,
  ReactElement,
  FC
} from "react";
import classNames from "classnames";
import { Classes } from "jss";

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  classes: Classes<"input" | "root" | "placeholder" | "placeholderActive" | "inputActive" | "inputIcon">;
  placeholder?: string;
  className?: string;
  icon?: ReactElement;
  type?: string;
  inputIsFocused?(arg0: boolean): void;
  value?: any;
}

const Input: FC<IInputProps> = ({
  classes = {},
  placeholder,
  className,
  icon,
  inputIsFocused = () => {},
  value = null,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const input = createRef<HTMLInputElement>();

  return (
    <div className={classNames(classes.root, className)}>
      {placeholder && (
        <span
          data-test-id="placeholder"
          className={classNames(classes.placeholder, {
            [classes.placeholderActive as any]: isFocused
          })}
        >
          {placeholder}
        </span>
      )}
      {icon && React.cloneElement(icon, { className: classes.inputIcon })}
      <input
        ref={input}
        onFocus={() => {
          setIsFocused(true);

          return inputIsFocused && inputIsFocused(true);
        }}
        onBlur={() => {
          if (input.current) {
            setIsFocused(input.current.value.length > 0);

            return inputIsFocused && inputIsFocused(false);
          }
        }}
        className={classNames(classes.input, {
          [classes.inputActive as any]: isFocused
        })}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
