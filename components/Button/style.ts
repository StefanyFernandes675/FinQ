import React from 'react';
import {StyleSheet} from 'react-native'
import {COLORS} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: COLORS.purple,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    marginVertical: 16,
    width: '100%',
  },
  buttonTextLogin: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonDisabled: {
      backgroundColor: COLORS.grayLight,
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 0,
      marginVertical: 16,
      width: '100%',
  }
});