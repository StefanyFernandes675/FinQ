import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './style';

import Coffe from '../../assets/coffee.png';
import Money from '../../assets/money.png';
import Heart from '../../assets/heart.png';

export default Header = ({streak, money, lives}) => {
  return (
    <View style={styles.header}>
        <Text style={styles.textCategory}>IB PREP</Text>
        <View style={styles.info}>
          <View style={styles.row}>
            <Image source={Coffe} style={styles.image}/>
            <Text style={styles.textStreak}>{streak}</Text>
          </View>
          <View style={styles.row}>
            <Image source={Money} style={styles.image}/>
            <Text style={styles.textMoney}>${money}</Text>
          </View>
          <View style={styles.row}>
            <Image source={Heart} style={styles.image}/>
            <Text style={styles.textHeart}>{lives}</Text>
          </View>
        </View>
      </View>
  )
};
