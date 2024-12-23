import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, useWindowDimensions} from 'react-native';
import Check from '../../assets/check.png';
import {styles} from './style';

export default OnboardingItem = ({item, navigation}) => {
  const {width} = useWindowDimensions();

  console.log("OnboardingItem received:", item);

  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={styles.image} />
      
      <View>
        <Text style={styles.title}>{item.title}</Text>
        
        {item.description && <Text style={styles.description}>{item.description}</Text>}
        
        {item.checklist && item.checklist.map((text, index) => (
          <View key={index} style={styles.checkContainer}>  
            <Image source={Check} style={styles.imageCheck} />
            <Text style={styles.checklistItem}>{text}</Text>
          </View>
        ))}

        {item.buttons && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCadastrar} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonTextCadastrar}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
