import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image } from 'react-native';
import Slider from '../../components/Slider/Slider';
import Header from '../../components/Header/Header';

import {styles} from './style';

export default function Home({ navigation }) {

  const [name, setName] = useState('Finq OWl');
  const [lives, setLives] = useState(5);
  const [money, setMoney] = useState(29);
  const [streak, setStreak] = useState(2);

  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const token = await AsyncStorage.getItem('token');
      if (user !== null && token !== null) {
        const parsedUser = JSON.parse(user);

        setMoney(parsedUser.dollars);
        setLives(parsedUser.lifes);
        setStreak(parsedUser.streak_count);

        const nameParts = parsedUser.name.split(' ');
        const firstName = nameParts[0];

        setName(firstName);

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
      <Header streak={streak} money={money} lives={lives} />
      <Text style={styles.textTitle}>👋 Hey, {name}!</Text>
      <Slider />
    </View>
  );
}
