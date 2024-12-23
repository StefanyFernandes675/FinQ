import React from 'react';
import {StyleSheet} from 'react-native'
import {COLORS} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 12
  },
  textCategory: {
    fontFamily: 'inter',
    fontSize: 14,
    backgroundColor: COLORS.purpleDark,
    padding: 14,
    color: '#FFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.purpleDark
  },
  info: {
    flexDirection: 'row',
    gap: 16
  },
  row: {
    flexDirection: 'row'
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  textStreak: {
    fontFamily: 'inter',
    fontSize: 14,
    fontWeight: 700,
    color: COLORS.purpleDark
  },
  textMoney: {
    fontFamily: 'inter',
    fontSize: 14,
    fontWeight: 700,
    color: '#59C36A'
  },
  textHeart: {
    fontFamily: 'inter',
    fontSize: 14,
    fontWeight: 700,
    color: '#FF4952'
  },
});