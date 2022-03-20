import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.shape,
    paddingVertical: 16,
    borderRadius: 10,
  },
  text: {
    color: theme.colors.secondary,
    fontSize: 18,
    marginLeft: 12,
    fontFamily: theme.fonts.bold
  },
  description: {
    color: theme.colors.note,
    fontSize: 14,
    marginRight: 12,
    fontFamily: theme.fonts.bold,
    maxWidth: 200,
  }
});