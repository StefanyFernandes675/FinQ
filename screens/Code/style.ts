import React from 'react';
import {StyleSheet} from 'react-native'
import {COLORS} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    paddingVertical: 18,
    paddingHorizontal: 26
  },
  buttonIcon: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderColor: '#E8E3FA',
    borderWidth: 1,
    borderRadius: 100
  },
  texth1: {
    fontFamily: 'archivo',
    color: COLORS.purpleDark,
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
    marginBottom: 24
  },
  grid:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 12
  },
  resend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13
  },
  resendText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.purpleLight
  },
  time: {
    marginLeft: 3,
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.purple
  },
  buttonCode: {
    flex: 1, 
    borderWidth: 1, 
    borderColor: "#F8F6FF", 
    color: COLORS.purpleLight,  
    width: '20%', 
    borderRadius: 8, 
    paddingHorizontal: 10, 
    paddingVertical: 18
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});
