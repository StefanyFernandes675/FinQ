import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

import Button from '../../components/Button/Button';
import ModalError from '../../components/ModalError/ModalError';

import { COLORS } from '../../assets/colors/colors';

export default function ForgotPassword({ navigation, email }) {
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  const [code5, setCode5] = useState('');
  const [isCodeFocused1, setIsCodeFocused1] = useState(false);
  const [isCodeFocused2, setIsCodeFocused2] = useState(false);
  const [isCodeFocused3, setIsCodeFocused3] = useState(false);
  const [isCodeFocused4, setIsCodeFocused4] = useState(false);
  const [isCodeFocused5, setIsCodeFocused5] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const [timeLeft, setTimeLeft] = useState(10 * 60); 

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const verifyCode = async (userData) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://finq-app-back-api.onrender.com/users/verify-code', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`Invalid Code: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Valid Code', data);
      return data;
    } catch (error) {
      console.error('Invalid Code', error);
      throw error; // Propaga o erro para ser tratado na chamada
    } finally {
      setIsLoading(false);
    }
  };

  const handleCode = () => {
    const userData = {
      user: email,
      code: code1 + code2 + code3 + code4 + code5,
    };

    verifyCode(userData)
      .then((response) => {
        if (response) {
          navigation.navigate('NewPassword', email);
        } else {
          setShowErrorModal(true);
        }
      })
      .catch((error) => {
        setShowErrorModal(true);
      });
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      navigation.navigate('ForgotPassword'); 
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, [timeLeft, navigation]);

  return (
    <View style={styles.container}>
      /*Modal Error*/
      <ModalError 
        setShowErrorModal={setShowErrorModal}
        showErrorModal={showErrorModal}
        navigation={navigation}
        textDesc={"Invalid code. Please, try again"}
        textButton={'Forgot Password'}
        navigationButton={'ForgotPassword'}
      />
      
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.purpleLight} />
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={styles.buttonIcon}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Ionicons
              name="arrow-back-outline"
              size={23}
              color={COLORS.purpleLight}
            />
          </TouchableOpacity>
          <Text style={styles.texth1}>📱 Type code below</Text>
          <Text style={styles.textp}>
            Fill the field below and we'll send a code of verification to your
            email or phone.
          </Text>

          <View style={styles.grid}>
            <TextInput
              style={[
                styles.buttonCode,
                isCodeFocused1 && { borderColor: COLORS.purpleLight },
              ]}
              onFocus={() => setIsCodeFocused1(true)}
              onBlur={() => setIsCodeFocused1(false)}
              onChangeText={(input) => setCode1(input)}
              value={code1}
              placeholder=""
              placeholderTextColor={COLORS.purpleLight}
            />
            <TextInput
              style={[
                styles.buttonCode,
                isCodeFocused2 && { borderColor: COLORS.purpleLight },
              ]}
              onFocus={() => setIsCodeFocused2(true)}
              onBlur={() => setIsCodeFocused2(false)}
              onChangeText={(input) => setCode2(input)}
              value={code2}
              placeholder=""
              placeholderTextColor={COLORS.purpleLight}
            />
            <TextInput
              style={[
                styles.buttonCode,
                isCodeFocused3 && { borderColor: COLORS.purpleLight },
              ]}
              onFocus={() => setIsCodeFocused3(true)}
              onBlur={() => setIsCodeFocused3(false)}
              onChangeText={(input) => setCode3(input)}
              value={code3}
              placeholder=""
              placeholderTextColor={COLORS.purpleLight}
            />
            <TextInput
              style={[
                styles.buttonCode,
                isCodeFocused4 && { borderColor: COLORS.purpleLight },
              ]}
              onFocus={() => setIsCodeFocused4(true)}
              onBlur={() => setIsCodeFocused4(false)}
              onChangeText={(input) => setCode4(input)}
              value={code4}
              placeholder=""
              placeholderTextColor={COLORS.purpleLight}
            />
            <TextInput
              style={[
                styles.buttonCode,
                isCodeFocused5 && { borderColor: COLORS.purpleLight },
              ]}
              onFocus={() => setIsCodeFocused5(true)}
              onBlur={() => setIsCodeFocused5(false)}
              onChangeText={(input) => setCode5(input)}
              value={code5}
              placeholder=""
              placeholderTextColor={COLORS.purpleLight}
            />
          </View>

          <Button
            text={'Confirm'}
            onpress={handleCode}
            disabled={code1 === '' || code2 === '' || code3 === '' || code4 === '' || code5 === ''}
          />

          <View style={styles.resend}>
            <Ionicons name={'time-outline'} size={20} color={COLORS.purpleLight} />
            <Text style={styles.resendText}>
              The code expires in <Text style={styles.time}>{formatTime(timeLeft)}</Text>
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
