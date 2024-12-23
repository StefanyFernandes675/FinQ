import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

import Owl from '../../assets/owl.png';
import Button from '../../components/Button/Button';
import ModalError from '../../components/ModalError/ModalError';

import { COLORS } from '../../assets/colors/colors';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const [showPasswordCheckIcon, setShowPasswordCheckIcon] = useState(false);
  const isLoginDisabled = !email || !password || !showCheckIcon || !showPasswordCheckIcon;
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setShowCheckIcon(emailRegex.test(input));
  };

  const validatePassword = (input) => {
    setShowPasswordCheckIcon(input.length >= 8);
  };

  const loginAccount = async (userData) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://finq-app-back-api.onrender.com/users/sign-in', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`Erro ao fazer Login: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Login realizado com sucesso', data);
      return data;
    } catch (error) {
      console.error('Erro ao fazer Login', error);
      throw error; // Propaga o erro para ser tratado na chamada
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    const userData = {
      user: email,
      password: password,
    };

    loginAccount(userData)
      .then((response) => {
        if (response && response.user && response.token) {
          AsyncStorage.setItem('user', JSON.stringify(response.user));
          AsyncStorage.setItem('token', response.token);
          navigation.navigate('MainTabs');
        } else {
          setShowErrorModal(true);
        }
      })
      .catch((error) => {
        setShowErrorModal(true);
      });
  };

  return (
    <View style={styles.container}>
      <ModalError 
        setShowErrorModal={setShowErrorModal}
        showErrorModal={showErrorModal}
        navigation={navigation}
        textDesc={"Invalid e-mail or password. Please, try again"}
        textButton={'Login'}
        navigationButton={'Login'}
      />

      {/* Indicador de carregamento */}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.purpleLight} />
        </View>
      )}

      {!isLoading && (
        <>
          <View>
            <Image source={Owl} style={styles.image} />
            <Text style={styles.texth1}>
              <Text style={styles.texth12}>Unlock</Text> Your Financial Future with FinQ
            </Text>
          </View>
          <View style={styles.form}>
            {/* Email */}
            <View style={styles.containerInput}>
              <Text style={styles.textinput}>E-mail</Text>
              <View style={styles.containerIcon}>
                <TextInput
                  style={[
                    { flex: 1, color: COLORS.purpleLight },
                    isEmailFocused && { borderColor: COLORS.purpleLight },
                  ]}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  onChangeText={(input) => {
                    setEmail(input);
                    validateEmail(input);
                  }}
                  value={email}
                  placeholder="oktavio@gowstudio.pro"
                  placeholderTextColor={COLORS.purpleLight}
                  autoCapitalize='none'
                />
                {showCheckIcon && (
                  <Ionicons
                    name={'checkmark-circle-outline'}
                    size={14}
                    color={COLORS.purpleLight}
                    style={styles.icon}
                    onPress={toggleShowPassword}
                  />
                )}
              </View>
            </View>

            {/* Password */}
            <View style={styles.containerInput}>
              <Text style={styles.textinput}>Password</Text>
              <View style={styles.containerIcon}>
                <TextInput
                  style={[
                    { flex: 1, color: COLORS.purpleLight },
                    isPasswordFocused && { borderColor: COLORS.purpleLight },
                  ]}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  onChangeText={(input) => {
                    setPassword(input);
                    validatePassword(input);
                  }}
                  value={password}
                  placeholder="******"
                  placeholderTextColor={COLORS.purpleLight}
                  secureTextEntry={!showPassword}
                />
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={14}
                  color={COLORS.purpleLight}
                  style={styles.icon}
                  onPress={toggleShowPassword}
                />
              </View>
            </View>
            <Button text="Login" onpress={handleLogin} disabled={isLoginDisabled} />
          </View>
          <View style={styles.containerRow}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.textRow}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.textRow2}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}