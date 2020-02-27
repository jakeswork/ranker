import { Theme } from "../../../../../../utils/theme";

export default (theme: Theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    backgroundColor: theme.colorDark,
    border: `1px solid ${theme.colorDark}`,
  },
  cardText: {
    fontWeight: 700,
    fontSize: 20,
  },
  active: {
    border: `1px solid ${theme.colorActive}`,
  },
  slider: {
    width: 192,
    marginLeft: 64
  }
});
