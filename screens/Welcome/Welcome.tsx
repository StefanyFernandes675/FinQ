import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

import Button from '../../components/Button/Button';

export default function Welcome({ navigation }) {

  const handleLink = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texth1}>👋 New password have been created</Text>
      <Text style={styles.textp}>
        It's done! Now with the new password you can access your IB Quizz App, let's get started?
      </Text>
      <Text>👇</Text>
      <Button text={'Login'} onpress={handleLink} disabled={false}/>
    </View>
  );
}
