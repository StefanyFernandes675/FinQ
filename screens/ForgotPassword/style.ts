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
    borderRadius: 100,
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24
  },
  switchText: {
    fontFamily: 'archivo',
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.purpleLight,
    marginHorizontal: 24,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent'
  },
  activeText: {
    color: COLORS.purple,
    borderBottomColor: COLORS.purple
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.purpleLight,
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
    marginBottom: 24
  },
  input: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.purpleDark
  },
  icon: {
    marginLeft: 10
  },
  resend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13
  },
  resendText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: "#5D5B65"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});
