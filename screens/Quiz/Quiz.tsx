import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress'; 

import { styles } from './style';
import { COLORS } from '../../assets/colors/colors';

import Header from '../../components/Header/Header';

export default function Quiz({ navigation }) {
  const [completed, setCompleted] = useState({});
  const [lives, setLives] = useState(5);
  const [money, setMoney] = useState(29);
  const [streak, setStreak] = useState(2);
  const [id, setId] = useState('');
  const [categories, setCategories] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = (categoryId) => {
    setCompleted((prevState) => ({
      ...prevState,
      [categoryId]: true,
    }));
  };

  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const token = await AsyncStorage.getItem('token');
      if (user !== null && token !== null) {
        const parsedUser = JSON.parse(user);

        setMoney(parsedUser.dollars);
        setLives(parsedUser.lifes);
        setStreak(parsedUser.streak_count);
        setId(parsedUser.id);

        console.log('Usuário:', parsedUser);
        console.log('Token:', token);
      }
    } catch (error) {
      console.error('Erro ao recuperar os dados do usuário', error);
    }
  };

  const getCategories = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://finq-app-back-api.onrender.com/category', { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar categorias: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Categorias encontradas:', data.category);
      setCategories(data.category);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
    getCategories(); // Buscar categorias ao carregar o componente
  }, []);

  const renderCategory = ({ item }) => {
    const completedCategory = completed[item.id];

    return (
      <TouchableOpacity
        style={[
          styles.quizItem,
          { backgroundColor: completedCategory ? '#d4edda' : '#fff' },
        ]}
        onPress={() => {
          navigation.navigate('Questions', {
            userId: id,
            categoryId: item.id,
            onComplete: () => handleComplete(item.id),
          });
        }}
      >
        <Text style={styles.quizText}>{item.name}</Text>
        <Text style={styles.quizDetails}>{item.description}</Text>
        {completedCategory && <Text style={styles.status}>✅ Completed</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header money={money} streak={streak} lives={lives} />
      {isLoading ? (
        <Text style={styles.loadingText}>Carregando categorias...</Text>
      ) : (
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategory}
        />
      )}
    </View>
  );
}
