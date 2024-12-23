import React from 'react';
import {StyleSheet} from 'react-native'
import {COLORS} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 66
  },
  image: {
    width: 111,
    height: 75,
    marginBottom: 20,
  },
  texth1: {
    fontFamily:'archivo',
    fontSize: 28,
    fontWeight: 700,
    color: COLORS.purpleDark,
  },
  texth12: {
    fontFamily:'archivo',
    fontSize: 28,
    fontWeight: 700,
    color: COLORS.purple
  },
  form: {
    width: '100%'
  },
  containerInput: {
    marginVertical: 24,
  },
  textinput: {
    marginBottom: 12,
    fontFamily: 'archivo',
    fontSize: 12,
    color: COLORS.purpleLight
  },
  containerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: COLORS.purpleLight
  },
  icon: {
    marginLeft: 10
  },
  input: {
    width: '100%',
    color: COLORS.purpleDark,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.purpleLight
  },
  containerRow :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 16
  },
  textRow: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.purpleDark
  },
  textRow2: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.purple,
    textDecorationLine: 'underline'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: COLORS.purpleDark
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
