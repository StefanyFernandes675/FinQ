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
  textinput: {
    fontFamily: 'archivo',
    color: COLORS.purpleLight,
    fontSize: 12,
    fontWeight: 400,
    marginBottom: 12,
    marginTop: 12,
  },
  inputContainer: {
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});
