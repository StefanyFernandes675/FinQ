import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

export default Button = ({text, onpress, disabled}) => {
  return (
    <TouchableOpacity style={[
                  styles.buttonLogin,
                  disabled == true && styles.buttonDisabled,
                ]} 
                onPress={onpress} disabled={disabled}>
      <Text style={styles.buttonTextLogin}>{text}</Text>
    </TouchableOpacity>
  )
};
