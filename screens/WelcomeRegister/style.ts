import React from 'react';
import {StyleSheet} from 'react-native'
import {COLORS} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
    backgroundColor: COLORS.purpleDark,
    padding: 18,
    paddingHorizontal: 26
  },
  texth1: {
    fontFamily: 'archivo',
    color: "#FFF",
    fontSize: 24,
    fontWeight: 700,
    marginTop: 16,
    marginBottom: 24
  },
  textp: {
    fontFamily: 'archivo',
    color: COLORS.purpleLight,
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 24,
  },
});
