import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';
import * as Progress from 'react-native-progress';

import {COLORS} from '../../assets/colors/colors';

import Books from '../../assets/books.png';
import Badge from '../../assets/badge-3.png';
import Coffee from '../../assets/coffee.png';
import Money from '../../assets/money.png';
import Award from '../../assets/badge-ranking3.png';

export default function Profile({ navigation }) {
  const [total, setTotal] = useState(1);
  const [watched, setWatched] = useState(1);
  const [name, setName] = useState('Finq Owl');
  const [streak, setStreak] = useState(0);
  const [money, setMoney] = useState(0);
  const progress = (watched) / total;

  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const token = await AsyncStorage.getItem('token');
      if (user !== null && token !== null) {
        const parsedUser = JSON.parse(user);

        const nameParts = parsedUser.name.split(' ');
        const twoNames = nameParts[0] + ' ' +  nameParts[1];

        setName(twoNames);
        setMoney(parsedUser.dollars);
        setStreak(parsedUser.streak_count);

        console.log('Usuário:', parsedUser);
        console.log('Token:', token);
      }
    } catch (error) {
      console.error('Erro ao recuperar os dados do usuário', error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image source={Badge} />
      </View>
      <View>
        <View style={styles.containerNameFlag}>
          <Text style={styles.textName}>{name}</Text>
          <FontAwesome name="flag" size={24} color={COLORS.purpleDark} />
        </View>
        <View>
          <View style={styles.watched}>
            <View style={styles.watchedRow}>
              <Text style={styles.watchedText}>Watched classes</Text>
              <Text>📚</Text>
            </View>
            <Text style={styles.watchedTotal}>{watched} of {total}</Text>
            <Progress.Bar
              progress={progress}
              width={200}
              color="#6A5ACD"
              unfilledColor="#D3D3D3"
              borderColor="#6A5ACD"
            />
          </View>
          <View style={styles.stats}>
            <Text style={styles.textName}>Statistics</Text>
            <View style={styles.rowStats}>
              <View style={styles.itemStats}>
                <Image source={Coffee} style={styles.imgStats}/>
                <View>
                  <Text style={styles.textStats}>{streak}</Text>
                  <Text style={styles.descStats}>Day Streak</Text>
                </View>
              </View>
              <View style={styles.itemStats}>
                <Image source={Money} style={styles.imgStats}/>
                <View>
                  <Text style={styles.textStats}>${money}</Text>
                  <Text style={styles.descStats}>Total Money</Text>
                </View>
              </View>
            </View>

            <View style={styles.rowStats}>
              <View style={styles.itemStats}>
                <Image source={Award} style={styles.imgStats}/>
                <View>
                  <Text style={styles.textStats}>MD</Text>
                  <Text style={styles.descStats}>League</Text>
                </View>
              </View>
              <View style={styles.itemStats}>
                <Image source={Books} style={styles.imgStats}/>
                <View>
                  <Text style={styles.textStats}>Prep</Text>
                  <Text style={styles.descStats}>Top Course</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}