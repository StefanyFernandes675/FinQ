import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, Text, FlatList, Image } from 'react-native';
import { styles } from './style';
import RankingItem from '../../components/RankingItem/RankingItem';

import Header from '../../components/Header/Header';

import Badge from '../../assets/badge-ranking.png';

export default function Ranking() {
  const [lives, setLives] = useState(5);
  const [money, setMoney] = useState(29);
  const [streak, setStreak] = useState(2);
  const [id, setId] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        setMoney(parsedUser.dollars);
        setLives(parsedUser.lifes);
        setStreak(parsedUser.streak_count);
        setId(parsedUser.id);
      }
    } catch (error) {
      console.error('Erro ao recuperar os dados do usuário', error);
    }
  };

  const fetchRanking = async () => {
    try {
      setIsLoading(true);

      const response = await fetch('https://finq-app-back-api.onrender.com/ranking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar o ranking: ${response.statusText}`);
      }

      const data = await response.json();

      if (data && data.users) {
        const sortedUsers = data.users.sort((a, b) => b.experience - a.experience);
        setUsers(sortedUsers); // Sempre define `users` para exibir o ranking, mesmo com um único usuário
        console.log('Ranking atualizado:', sortedUsers);
      }
    } catch (error) {
      console.error('Erro ao carregar o ranking:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await getUserData();
      if (id) {
        await fetchRanking();
      }
    };
    loadData();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <Header streak={streak} money={money} lives={lives} />
      <Text style={styles.textRanking}>Ranking</Text>
      <Image source={Badge} style={styles.image} />
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <RankingItem item={item} index={index} id={id} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          !isLoading && <Text style={styles.textNoData}>Nenhum dado encontrado</Text>
        }
      />
    </SafeAreaView>
  );
}
