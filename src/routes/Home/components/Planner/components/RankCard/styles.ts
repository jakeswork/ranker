import { Theme } from "../../../../../../utils/theme";

export default (theme: Theme) => ({
  rankImage: {
    width: 24,
    marginBottom: 16
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: theme.colorDark,
    border: `1px solid ${theme.colorDark}`,
    width: 164,
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    padding: 24
  },
  cardText: {
    fontWeight: 700,
    fontSize: 20
  },
  active: {
    border: `1px solid ${theme.colorActive}`,
  },
  slider: {
    width: 124,
    marginTop: 8,
    backgroundColor: 'transparent'
  },
  percentage: {
    marginTop: 16,
  },
});
