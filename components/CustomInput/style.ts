import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.purpleLight,
    width: '100%',
    borderRadius: 8
  },
  input: {
    flex: 1,
    color: COLORS.purpleLight,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  icon: {
    marginRight: 10,
  },
});
