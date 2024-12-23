import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff', // Mantido para os itens que não são selecionados
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  rowMe: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  gradientBackground: {
    borderRadius: 8, 
  },
  badge: {
    width: 28,
    height: 28,
  },
  textBadge: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.purpleDark,
    marginRight: 8,
  },
  textName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.purpleDark,
    fontFamily: 'archivo',
  },
  textXP: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.purpleLight,
    fontFamily: 'archivo',
  },
  textBadgeMe: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 8,
  },
  textNameMe: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: '#FFF',
    fontFamily: 'archivo',
  },
  textXPMe: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFF',
    fontFamily: 'archivo',
  },
});
