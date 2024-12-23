import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 65, 
    height: 65,
    resizeMode: 'contain',
    alignSelf: 'center', 
    marginVertical: 20, 
  },
  textRanking: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.purpleDark,
    fontFamily: 'archivo',
    paddingVertical: 16,
    textAlign: 'center',
  },
});