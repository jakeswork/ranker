import theme, { Theme } from "../../utils/theme";
import { IButtonProps } from "./Button";

export const defaultButtonStyle = {
  display: "inline-block",
  textDecoration: "none",
  textAlign: "center" as "center",
  position: "relative" as "relative",
  border: 0,
  WebkitBoxShadow: "0 1px 5px 0 rgba(0,0,0,0.06)",
  boxShadow: "0 1px 5px 0 rgba(0,0,0,0.06)",
  fontSize: 16,
  outline: "none",
  fontWeight: "bold" as "bold",
  minWidth: 88,
  margin: 8,
  borderRadius: 4,
  cursor: "pointer",
  fontFamily: theme.fontFamily,
  padding: "12px 32px"
};

export default (theme: Theme) => ({
  [theme.media.mobile as any]: {
    button: {
      width: "100%"
    },
    secondary: {
      width: "100%"
    },
    link: {
      width: "calc(100% - 66px)"
    }
  },
  button: {
    ...defaultButtonStyle,
    background: ({ danger, success, disabled }: IButtonProps): string => {
      if (disabled) return theme.colorGrey;

      if (danger) return theme.colorRed;

      if (success) return theme.colorGreen;

      return theme.colorActive;
    },
    border: 0,
    color: "#fff",
    textShadow: "0 1px 0 rgba(0,0,0,0.03)"
  },
  secondary: {
    ...defaultButtonStyle,
    backgroundColor: "transparent",
    border: `1px solid ${theme.colorActive}`,
    color: theme.colorActive
  },
  flat: {
    ...defaultButtonStyle,
    color: ({ disabled }: IButtonProps) => disabled ? theme.colorGrey : theme.colorActive,
    border: 0,
    WebkitBoxShadow: "0",
    boxShadow: "0",
    background: "transparent"
  },
  buttonIcon: {
    fontSize: 20,
    marginLeft: 8,
    marginBottom: -4
  }
});
