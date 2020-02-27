import { Theme } from "../../../../../../utils/theme";

export default (theme: Theme) => ({
  rankImage: {
    width: 24,
    marginRight: 16
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: theme.colorDark,
    border: `1px solid ${theme.colorDark}`,
  },
  cardText: {
    fontWeight: 700,
    fontSize: 20
  },
  active: {
    border: `1px solid ${theme.colorActive}`,
  },
  slider: {
    width: 192,
    marginLeft: 64,
    backgroundColor: 'transparent'
  }
});
