import React from 'react';
import {StyleSheet} from 'react-native'
import {COLORS} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start'
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.purple,
  },
  inactiveDot: {
    backgroundColor: '#fff',
    borderColor: COLORS.purple,
    borderWidth: 1
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.purple,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20
  },
  backText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold',
  }
});
