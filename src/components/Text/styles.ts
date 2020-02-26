import { Theme } from "../../utils/theme";

const defaultStyles = (theme: Theme, light?: Boolean) => ({
  color: light ? theme.textWhite : theme.textPrimary,
  fontFamily: theme.fontFamily,
  fontWeight: 700,
  margin: 0,
  marginBottom: 4
});

export default (theme: Theme) => {
  const defaults = defaultStyles(theme)

  return {
    h1: {
      ...defaults,
      fontSize: 30,
      marginBottom: 8
    },
    h2: {
      ...defaults,
      fontSize: 24
    },
    h3: {
      ...defaults,
      fontSize: 16
    },
    caption: {
      ...defaults,
      wordWrap: "break-word" as "break-word",
      fontSize: 12,
      letterSpacing: "0.08333333333333333em",
      marginBottom: 0,
      textTransform: "uppercase" as "uppercase"
    },
    p: {
      ...defaults,
      fontSize: 16,
      fontWeight: 400
    }
  };
};
