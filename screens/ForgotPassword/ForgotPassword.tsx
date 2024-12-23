import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Modal, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/Button/Button';
import ModalError from '../../components/ModalError/ModalError';

import { COLORS } from '../../assets/colors/colors';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(input));
  };

  const handleInputChange = (input) => {
    setEmail(input);
    validateEmail(input);
  };

  const handleLink = () => {
    if (isValid) {
      handleCode();
    }
  };

  const sendCode = async (userData) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://finq-app-back-api.onrender.com/users/send-code', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      
      if (data.message === 'Code sent to your email') {
        console.log(data.link);
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
    };

    sendCode(userData)
      .then((response) => {
        if (response) {
          navigation.navigate('Code', email);
        } 
      })
      .catch(() => {
        setShowErrorModal(true);
      });
  };

  return (
    <View style={styles.container}>
      {/* Modal de erro */}
      <ModalError 
        setShowErrorModal={setShowErrorModal}
        showErrorModal={showErrorModal}
        navigation={navigation}
        textDesc={"You are not registered on our app. Don't waste time and make FinQ happy!"}
        textButton={'Register'}
        navigationButton={'Register'}
      />
      
      {/* Indicador de carregamento */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.purpleLight} />
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={styles.buttonIcon}
            onPress={() => navigation.navigate('Login')}
          >
            <Ionicons
              name="arrow-back-outline"
              size={23}
              color={COLORS.purpleLight}
            />
          </TouchableOpacity>

          <Text style={styles.texth1}>🔑 Forgot Password?</Text>
          <Text style={styles.textp}>
            Fill the field below and we'll send a code of verification to your
            email.
          </Text>

          <View style={styles.inputContainer}>
            <CustomInput
              type="email"
              value={email}
              onChangeText={handleInputChange}
              placeholder="example@example.com"
              validate={isValid}
              keyboardType="email-address"
            />
          </View>

          <Button text={'Send Code'} onpress={handleLink} disabled={!isValid} />

          <View style={styles.resend}>
            <Ionicons name={'mail-outline'} size={20} color="#5D5B65" />
            <TouchableOpacity>
              <Text style={styles.resendText}>I didn't receive any code</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}