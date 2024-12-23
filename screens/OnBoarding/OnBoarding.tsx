import React, {useRef, useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import OnboardingItem from '../../components/OnboardingItem/OnboardingItem';
import slides from '../../assets/slides/slides';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './style';

export default Onboarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNextPage = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({index: currentIndex - 1});
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderDots = () => {
    return slides.map((_, index) => (
      <View key={index} style={[styles.dot, currentIndex === index ? styles.activeDot : styles.inactiveDot]} />
    ));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({item}) => <OnboardingItem item={item} navigation={navigation} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ref={flatListRef} 
        onScroll={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
          setCurrentIndex(index);
        }}
      />

      <View style={styles.navigationContainer}>
        <View style={styles.dotsContainer}>
          {renderDots()} 
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={currentIndex === slides.length - 1 ? handlePreviousPage : handleNextPage} 
        >
          {currentIndex === slides.length - 1 ? (
            <Text style={styles.backText}>Voltar</Text>
          ) : (
            <Ionicons name="arrow-forward-outline" size={30} color="#fff"/> 
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

