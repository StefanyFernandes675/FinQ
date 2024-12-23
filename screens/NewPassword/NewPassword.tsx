import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/Button/Button';
import ModalError from '../../components/ModalError/ModalError';

import { COLORS } from '../../assets/colors/colors';

export default function NewPassword({ navigation, email }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handlePasswordChange = (input) => {
    setPassword(input);
    const isValidLength = input.length >= 8;
    setIsPasswordValid(isValidLength);
    setIsPasswordMatch(isValidLength && input === confirmPassword);
  };

  const handleConfirmPasswordChange = (input) => {
    setConfirmPassword(input);
    setIsPasswordMatch(password === input && input.length >= 8);
  };

  const sendCode = async (userData) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://finq-app-back-api.onrender.com/users/reset-password', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      
      if (data.message === 'Password changed successfully!') {
        return data;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('User not found', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleCode = () => {
    const userData = {
      user: email,
      password: password
    };
    if (isPasswordMatch && isPasswordValid) {
      sendCode(userData)
      .then((response) => {
        if (response) {
          navigation.navigate('WelcomeRegister');
        } 
      })
      .catch(() => {
        setShowErrorModal(true);
      });
    }
  };

  return (
    <View style={styles.container}>
      <ModalError 
        setShowErrorModal={setShowErrorModal}
        showErrorModal={showErrorModal}
        textButton={'Register'}
        textDesc={"You are not registered on our app. Don't waste time and make FinQ happy!"}
        navigationButton={'Register'}
        navigation={navigation}
      />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.purpleLight} />
        </View>
      ) : (
        <>
        <TouchableOpacity
          style={styles.buttonIcon}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Ionicons
            name="arrow-back-outline"
            size={23}
            color={COLORS.purpleLight}
          />
        </TouchableOpacity>
        <Text style={styles.texth1}>🔑 New Password</Text>
        <Text style={styles.textp}>
          Fill the field below to set your new password.
        </Text>

        <Text style={styles.textinput}>New Password</Text>
        <CustomInput
          type="password"
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="******"
          keyboardType="default"
          validate={isPasswordValid}
        />

        <Text style={styles.textinput}>Confirm Password</Text>
        <CustomInput
          type="password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          placeholder="******"
          keyboardType="default"
          validate={isPasswordMatch}
        />

        {!isPasswordMatch && (
          <Text style={styles.errorText}>Passwords do not match</Text>
        )}

        <Button
          text={'Reset Password'}
          onpress={handleCode}
          disabled={!isPasswordMatch || !isPasswordValid} 
        />
      </>
    )}
    </View>
  );
}
