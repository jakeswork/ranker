import { Theme } from "../../utils/theme";

const defaultStyles = (theme: Theme) => ({
  color: theme.textLight,
  fontFamily: theme.fontFamily,
  fontWeight: 700,
  margin: 0,
  marginBottom: 4,
  textDecoration: 'none'
});

export default (theme: Theme) => {
  const defaults = defaultStyles(theme)

  return {
    h1: {
      ...defaults,
      fontSize: 48,
      marginBottom: 16,
      color: 'white'
    },
    h2: {
      ...defaults,
      fontSize: 36,
      marginBottom: 8
    },
    h3: {
      ...defaults,
      fontSize: 24,
      marginTop: 48
    },
    caption: {
      ...defaults,
      wordWrap: "break-word" as "break-word",
      fontSize: 12,
      letterSpacing: "0.08333333333333333em",
      marginBottom: 0,
      textTransform: "uppercase" as "uppercase",
      userSelect: 'none' as 'none',
      color: theme.colorActive,
    },
    p: {
      ...defaults,
      fontSize: 16,
      fontWeight: 400
    }
  };
};
