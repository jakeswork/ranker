import { Theme } from "../../utils/theme";

export default (theme: Theme) => ({
  input: {
    padding: "12px 16px",
    paddingRight: 32,
    background: theme.colorDark,
    color: 'white',
    outline: "none",
    border: `1px solid ${theme.colorDark}`,
    borderRadius: 4,
    fontSize: 16,
    width: "calc(100% - 50px)",
    fontFamily: theme.fontFamily
  },
  root: {
    position: "relative" as "relative",
    margin: "8px 0",
    display: "inline-block"
  },
  placeholder: {
    position: "absolute" as "absolute",
    fontFamily: theme.fontFamily,
    top: 14,
    left: 12,
    userSelect: "none" as "none",
    pointerEvents: "none" as "none",
    color: "#ccc",
    padding: "0 8px",
    fontSize: 16,
    transition: "all .2s ease-in-out",
  },
  placeholderActive: {
    top: -6,
    left: 8,
    fontWeight: "bold" as "bold",
    background: `linear-gradient(#111111 49%, ${theme.colorDark} 50%)`,
    fontSize: 12,
    color: theme.colorActive
  },
  inputActive: {
    border: `1px solid ${theme.colorActive}`
  },
  inputIcon: {
    position: "absolute" as "absolute",
    color: "#ccc",
    top: 12,
    right: 12,
    fontSize: 20
  }
});
