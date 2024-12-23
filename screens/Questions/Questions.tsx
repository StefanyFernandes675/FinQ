import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { styles } from './style';

// Importação das imagens das corujas
import Owl1 from '../../assets/owl_quiz1.png';
import Owl2 from '../../assets/owl_quiz2.png';
import Owl3 from '../../assets/owl_quiz3.png'; 
import Money from '../../assets/money.png'; 
import HeartIcon from '../../assets/heart.png'; 

const Questions = ({ navigation, route }) => {
  const [questions, setQuestions] = useState([]);
  const { onComplete, userId, categoryId } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lives, setLives] = useState(5);
  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [failureModalVisible, setFailureModalVisible] = useState(false);
  const [loadingRanking, setLoadingRanking] = useState(false);

  useEffect(() => {
    const startQuiz = async () => {
      try {
        const response = await axios.post('https://finq-app-back-api.onrender.com/quiz/start', {
          userId: userId,
          categoryId: categoryId,
        });
        setQuestions(response.data.questions);
      } catch (error) {
        console.error('Error starting quiz:', error);
      }
    };

    startQuiz();
  }, []);

  const handleAnswerSelection = (answerId, correct) => {
    setSelectedAnswer(answerId);
    if (correct) {
      handleSubmit(answerId);
    } else {
      setLives(lives - 1);
      if (lives - 1 === 0) {
        setFailureModalVisible(true);
      } else if (currentQuestionIndex === questions.length - 1) {
        finishQuiz(); 
      }
    }
  };

  const handleSubmit = async (answerId) => {
    try {
      const response = await axios.post('https://finq-app-back-api.onrender.com/quiz/submit', {
        userId: userId,
        questionId: questions[currentQuestionIndex].questionId,
        answerId,
      });
      if (response.data.message === 'Correct answer') {
        setProgress(progress + 1);
      }
      goToNextQuestion();
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  const handleRanking = async (userId) => {
    setLoadingRanking(true);
    try {
      const response = await axios.post('https://finq-app-back-api.onrender.com/add-users-to-league', {
        level: 1,
        userIds: [userId],
      });
      
      if (response.data.createdLevels) {
        console.log('User added to ranking successfully');
      } else {
        console.error('Failed to add user to ranking:', response.data.message);
      }
    } catch (error) {
      console.error('Error adding to the ranking:', error);
    } finally {
      setLoadingRanking(false);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz(); 
    }
  };

  const finishQuiz = async () => {
    try {
      const response = await axios.post('https://finq-app-back-api.onrender.com/quiz/finish', {
        userId: userId,
      });
      const { lifes, dollars } = response.data;
      if (lifes > 0) {
        setSuccessModalVisible(true);
        handleRanking(userId); // Atualiza o ranking ao finalizar o quiz
      } else {
        setFailureModalVisible(true);
      }
    } catch (error) {
      console.error('Error finishing quiz:', error);
    }
  };

  const renderAnswerButton = (answer, correct) => {
    return (
      <TouchableOpacity
        style={[ 
          styles.answerButton, 
          selectedAnswer === answer.id && (correct ? styles.correct : styles.incorrect),
        ]}
        onPress={() => handleAnswerSelection(answer.id, correct)}
      >
        <Text style={styles.optionText}>{answer.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderQuestion = () => {
    if (questions.length === 0) return null;

    const question = questions[currentQuestionIndex];

    // Definindo a imagem da coruja com base no índice da questão
    let owlImage;
    switch (currentQuestionIndex % 3) {
      case 0:
        owlImage = Owl1;
        break;
      case 1:
        owlImage = Owl2;
        break;
      case 2:
        owlImage = Owl3;
        break;
      default:
        owlImage = Owl1;
        break;
    }

    return (
      <View style={styles.quizContainer}>
        <Text style={styles.title}>{question.question}</Text>
        <Image source={owlImage} style={styles.owlImage} />
        {question.answers.map((answer) =>
          renderAnswerButton(answer, answer.answer === 'Correct')
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.headerButton}>X</Text>
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View
            style={{
              ...styles.progressBarFill,
              width: `${(progress / questions.length) * 100}%`,
            }}
          />
        </View>
        <View style={styles.heartContainer}>
          <Image source={HeartIcon} style={styles.heartIcon} />
          <Text>{lives}</Text>
        </View>
      </View>

      <View style={styles.body}>{renderQuestion()}</View>

      {/* Modal de Sucesso */}
      {loadingRanking ? (
        <View style={styles.loadingContainer}>
          <Text>Updating your ranking...</Text> 
        </View>
      ) : (
        <Modal visible={successModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>You've completed the lesson!</Text>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.text}>EARNED MONEY</Text>
                  <View style={styles.money}>
                    <Image source={Money} />
                    <Text style={styles.textMoney}>+$10</Text>
                  </View>
                </View>
                <View style={styles.column}>
                  <Text style={styles.text}>MORE HEARTS</Text>
                  <View style={styles.money}>
                    <Image source={HeartIcon} />
                    <Text style={styles.textHeart}>+1</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setSuccessModalVisible(false);
                  navigation.navigate('Home');
                }}
              >
                <Text style={styles.modalButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* Modal de Falha */}
      <Modal visible={failureModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Let's try again</Text>
            <Text style={styles.modalDescription}>You are out of lives</Text> {/* Corrigido */}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setFailureModalVisible(false);
                navigation.navigate('Home');
              }}
            >
              <Text style={styles.modalButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Questions;
