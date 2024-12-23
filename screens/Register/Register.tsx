import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

import { COLORS } from '../../assets/colors/colors';
import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/Button/Button';
import ModalError from '../../components/ModalError/ModalError';

export default function Registration({ navigation }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    password: '',
    confirmPassword: '',
    preferences: [],
  });
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [interestAreas, setInterestAreas] = useState([]);

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && isEmailValid;
      case 2:
        return formData.phone && isPhoneValid;
      case 3:
        return formData.university;
      case 4:
        return isPasswordValid && isPasswordMatch;
      case 5:
        return formData.preferences.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isStepValid()) {
      if (step === 2) {
        setFormData((prevData) => ({
          ...prevData,
          phone: prevData.phone.replace(/\D/g, ''),
        }));
      }
      if (step === 5) {
        handleCreateAccount();
      } else {
        setStep(step + 1);
      }
    } else {
      alert('Por favor, preencha todos os campos obrigatórios antes de continuar.');
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => {
      return { ...prevData, [field]: value };
    });

    if (field === 'email') validateEmail(value);
    if (field === 'password') {
      const isValidLength = value.length >= 8;
      setIsPasswordValid(isValidLength);
      setIsPasswordMatch(isValidLength && value === formData.confirmPassword);
    }
    if (field === 'confirmPassword') {
      setIsPasswordMatch(formData.password === value && value.length >= 8);
    }
    if (field === 'phone') {
      const isValidLength = value.replace(/\D/g, '').length >= 11;
      setIsPhoneValid(isValidLength);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const handleTogglePreference = (preference) => {
    setFormData((prevData) => {
      const preferences = prevData.preferences.includes(preference)
        ? prevData.preferences.filter((p) => p !== preference)
        : [...prevData.preferences, preference];
      return { ...prevData, preferences };
    });
  };

  const getInterestAreas = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://finq-app-back-api.onrender.com/interest_areas');
      if (!response.ok) throw new Error('Erro ao buscar áreas de interesse');
      const data = await response.json();
      setInterestAreas(data.interest_area || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createAccount = async (userData) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://finq-app-back-api.onrender.com/users/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Erro ao criar conta');

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateAccount = () => {
    const userData = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      university: formData.university,
      password: formData.password,
      interest_areas: formData.preferences,
    };

    createAccount(userData)
      .then((response) => {
        if (response) navigation.navigate('WelcomeRegister');
      })
      .catch(() => setShowErrorModal(true));
  };

  useEffect(() => {
    getInterestAreas();
  }, []);

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <View>
            <Text style={styles.title}>👋 What's your name and best E-Mail?</Text>
            <Text style={styles.textInput}>Full Name</Text>
            <CustomInput
              placeholder="Otávio Alexandre"
              value={formData.name}
              onChangeText={(text) => handleInputChange('name', text)}
              keyboardType="default"
              validate={false}
              type="name"
            />
            <Text style={styles.textInput}>E-mail</Text>
            <CustomInput
              placeholder="oktavio@gowstudio.pro"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              keyboardType="default"
              validate={isEmailValid}
              type="email"
            />
          </View>
        );
      case 2:
        return (
          <View>
            <Text style={styles.title}>📱 Type a phone number</Text>
            <Text style={styles.textInput}>Phone Number</Text>
            <CustomInput
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChangeText={(text) => handleInputChange('phone', text)}
              keyboardType="number"
              validate={isPhoneValid}
              type="phone"
            />
          </View>
        );
      case 3:
        return (
          <View>
            <Text style={styles.title}>📚 Where did you study or are studying?</Text>
            <Text style={styles.textInput}>University Name</Text>
            <CustomInput
              placeholder="FATEC Baixada Santista"
              value={formData.university}
              onChangeText={(text) => handleInputChange('university', text)}
              keyboardType="default"
              validate={false}
              type="name"
            />
          </View>
        );
      case 4:
        return (
          <View>
            <Text style={styles.title}>🔑 Create your password</Text>
            <Text style={styles.textInput}>Password</Text>
            <CustomInput
              type="password"
              placeholder="Password"
              value={formData.password}
              onChangeText={(text) => handleInputChange('password', text)}
              keyboardType="default"
              validate={isPasswordValid && isPasswordMatch}
            />
            <Text style={styles.textInput}>Confirm Password</Text>
            <CustomInput
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChangeText={(text) => handleInputChange('confirmPassword', text)}
              keyboardType="default"
              validate={isPasswordMatch}
            />
            {!isPasswordMatch && (
              <Text style={styles.errorText}>Passwords do not match</Text>
            )}
          </View>
        );
      case 5:
        return (
          <View>
            <Text style={[styles.title, step === 5 && { color: '#FFF' }]}>
              🧠 Select what you want to learn here
            </Text>
            {interestAreas.map((area) => (
              <TouchableOpacity
                key={area.id}
                style={[styles.preferenceButton, formData.preferences.includes(area.name) && styles.selected]}
                onPress={() => handleTogglePreference(area.name)}
              >
                <Text style={styles.preferenceText}>{area.name}</Text>
                {formData.preferences.includes(area.name) && (
                  <Ionicons name="checkmark" size={20} color="white" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, step == 5 && { backgroundColor: COLORS.purpleDark }]}>
      <ModalError 
        setShowErrorModal={setShowErrorModal}
        showErrorModal={showErrorModal}
        textDesc={'Something went wrong. Please, try again'}
        textButton={'Try Again'}
        navigation={navigation}
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
          <View style={styles.progressContainer}>
            {step > 1 && (
              <TouchableOpacity style={styles.buttonIcon} onPress={handlePrev}>
                <Ionicons name="arrow-back-outline" size={23} color="#8C52FF" />
              </TouchableOpacity>
            )}
            <Text style={styles.progressText}>{`${step}`}</Text>
          </View>

          {renderContent()}

          <View style={styles.buttonContainer}>
            <Button
              text={step === 5 ? 'Get Started' : 'Next'}
              onpress={handleNext}
              disabled={!isStepValid()}
            />
          </View>
        </>
      )}
    </View>
  );
}