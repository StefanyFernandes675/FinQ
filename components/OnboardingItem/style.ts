import React from 'react';
import {StyleSheet} from 'react-native'
import {COLORS} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontFamily: 'archivo',
    fontSize: 40,
    marginBottom: 18,
    color: COLORS.purple,
    textAlign: 'center',
    paddingHorizontal: 32
  },
  description: {
    fontWeight: '400',
    fontFamily: 'archivo',
    color: COLORS.purpleDark,
    textAlign: 'center',
    paddingHorizontal: 32,
    fontSize: 16
  }, 
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 32
  },
  imageCheck : {
    width: 15,
    height: 10
  },
  checklistItem: {
    fontWeight: '400',
    fontFamily: 'archivo',
    fontSize: 16,
    color: COLORS.purpleDark,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 18,
    paddingHorizontal: 32
  },
  buttonLogin: {
    backgroundColor: COLORS.purple,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 16
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonCadastrar: {
    color: COLORS.purple,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.purple,
    backgroundColor: '#FFF',
    padding: 10,
    marginHorizontal: 10
  },
  buttonTextCadastrar: {
    color: COLORS.purple,
    fontWeight: 'bold',
    textAlign: 'center'
  },

});