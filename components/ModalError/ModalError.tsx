
import React from 'react';
import {Text, View, Image, Modal} from 'react-native';
import {styles} from './style';

import CryFinq from '../../assets/cry-finq-owl.png';
import Button from '../Button/Button';



export default ModalError = ({setShowErrorModal, navigation, showErrorModal, textDesc, textButton, navigationButton}) => {

   const handleClose = () => {
    setShowErrorModal(false);
    if (navigationButton) {
      navigation.navigate(navigationButton); 
    }
  };
  return (
    <Modal
        visible={showErrorModal}
        transparent
        animationType="slide"
        onRequestClose={handleClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={CryFinq} style={styles.image}/>
            <Text style={styles.modalText}>OOOOOPS 😭</Text>
            <Text style={styles.modalText}>
              {textDesc}
            </Text>
            <Button
              text={textButton}
              onpress={() => {
                setShowErrorModal(false);
                navigation.navigate(navigationButton);
              }}
              disabled={false}
            />
          </View>
        </View>
      </Modal>
  )
};