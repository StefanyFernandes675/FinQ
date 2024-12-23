import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';
import { COLORS } from '../../assets/colors/colors';
import { styles } from './style';

export default function CustomInput({
  type,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  validate
}) {
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <View style={styles.inputContainer}>
      {type === 'phone' ? (
        <TextInputMask
          style={styles.input}
          type={'custom'}
          options={{
            mask: '(99) 99999-9999',
          }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={COLORS.purpleLight}
          autoCapitalize='none'
        />
      ) : (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={COLORS.purpleLight}
          secureTextEntry={type === 'password' && !showPassword} 
          autoCapitalize='none'
        />
      )}

      {/* Ícone de validação ou senha */}
      {type === 'password' ? (
        <TouchableOpacity onPress={toggleShowPassword}>
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color={COLORS.purpleLight}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : validate ? (
        <Ionicons
          name={'checkmark-circle-outline'}
          size={20}
          color={COLORS.purpleDark}
          style={styles.icon}
        />
      ) : null}
    </View>
  );
}