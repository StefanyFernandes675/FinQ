import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';

import Badge1 from '../../assets/badge-ranking.png';
import Badge2 from '../../assets/badge-ranking2.png';
import Badge3 from '../../assets/badge-ranking3.png';

const badges = [Badge1, Badge2, Badge3];

export default function RankingItem({ item, index, id }) {
  const badge = badges[index] || null;

  const content = (
    <View style={[styles.row, item.id == id && styles.rowMe]}>
      {badge ? (
        <Image source={badge} style={styles.badge} />
      ) : (
        <Text style={[styles.textBadge, item.id == id && styles.textBadgeMe]}>{index + 1}</Text>
      )}
      <Text style={[styles.textName, item.id == id && styles.textNameMe]}>{item.name}</Text>
      <Text style={[styles.textXP, item.id == id && styles.textXPMe]}>{item.experience} XP</Text>
    </View>
  );

  if (item.id == id) {
    return (
      <LinearGradient
        colors={['#8762FF', '#C8B9FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}  // Estilo do gradiente
      >
        {content}
      </LinearGradient>
    );
  }

  return content;
}
