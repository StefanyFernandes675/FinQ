import React from 'react';
import {StyleSheet} from 'react-native'
import {COLORS} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 100
  },
  textTitle: {
    fontFamily: 'inter',
    fontSize: 24,
    color: COLORS.purpleDark,
    marginHorizontal: 12,
    marginVertical: 20,
  }
});
