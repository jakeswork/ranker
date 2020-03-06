import theme, { Theme } from "../../../../../../utils/theme";

export default (theme: Theme) => ({
  table: {
    background: theme.colorDark,
    position: 'relative' as 'relative',
    margin: 16,
    color: theme.textLight,
    fontFamily: theme.fontFamily,
    width: 'calc(100% - 32px)',
    borderRadius: 8,
  },
  tableHeader: {
    padding: 16,
  },
  tableData: {
    padding: 16,
    width: '20%',
  },
  resetButton: {
    position: 'absolute' as 'absolute',
    bottom: 16,
    right: 16
  }
});

export const selectStyles = (defaultReactSelectTheme: any) => ({
  ...defaultReactSelectTheme,
  colors: {
    ...defaultReactSelectTheme.colors,
    text: theme.textLight,
    primary: theme.colorActive,
    neutral0: theme.colorDark,
    primary25: theme.colorActive,
    neutral20: theme.textLight,
    neutral30: theme.textLight,
    neutral40: theme.textLight,
    neutral50: theme.textLight,
    neutral60: theme.textLight,
    neutral70: theme.textLight,
    neutral80: theme.textLight,
    neutral90: theme.textLight
  }
});
