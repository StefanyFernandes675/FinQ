import React, { useState } from 'react';
import { View, Text,FlatList} from 'react-native';
import {ImageSlider} from '../../assets/slides-home/SliderData';
import SliderItem from '../SliderItem/SliderItem';
import { styles } from './style';

export default function Slider() {

  return (
    <View style={styles.container}>
      <FlatList data={ImageSlider} 
      renderItem={({item, index}) => (
        <SliderItem item={item} index={index}   />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}
