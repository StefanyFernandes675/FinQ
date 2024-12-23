import { StyleSheet } from 'react-native';
import {COLORS} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  containerNameFlag: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    width: '100%', 
  },
  textName: {
    fontFamily: 'archivo',
    fontSize: 20,
    color: COLORS.purpleDark,
  },
  watched: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E8E3FA',
    borderRadius: 12,
    width: '100%', 
  },
  watchedText: {
    fontFamily: 'archivo',
    fontSize: 14,
    color: COLORS.purpleDark,
  },
  watchedTotal: {
    fontFamily: 'archivo',
    fontSize: 20,
    color: COLORS.purpleDark,
    fontWeight: '800'
  },
  watchedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  stats: {
    marginTop: 24,
    width: '100%', 
  },
  rowStats: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between', 
  },
  itemStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#E8E3FA',
    borderRadius: 12,
    marginHorizontal: 4, 
  },
  imgStats: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8, 
  },
  textStats: {
    fontFamily: 'archivo',
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.purpleDark,
  },
  descStats: {
    fontFamily: 'archivo',
    fontSize: 12,
    color: COLORS.purpleDark,
  },
});
