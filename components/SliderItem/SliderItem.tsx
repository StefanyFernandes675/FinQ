import React from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import { ImageSliderType } from '../../assets/slides-home/SliderData';
import { styles } from './style';

type Props = {
  item: ImageSliderType;
  index: number;
};

export default function SliderItem({ item }: Props) {
  const handlePress = () => {
    if (item.link) {
      Linking.openURL(`https://${item.link}`);
    }
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}