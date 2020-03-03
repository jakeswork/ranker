import { Theme } from "../../../../../../utils/theme";

export default (theme: Theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    backgroundColor: theme.colorDark,
    border: `1px solid ${theme.colorDark}`,
  },
  cardText: {
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 16,
  },
  active: {
    border: `1px solid ${theme.colorActive}`,
  },
});
