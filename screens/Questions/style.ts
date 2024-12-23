import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: '#fff',
    marginVertical: 20
  },
  header: { 
    flexDirection: 'row', 
    padding: 20, 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  headerButton: { 
    fontSize: 20, 
    color: COLORS.purple 
  },
  progressBar: { 
    flex: 1, 
    height: 5, 
    backgroundColor: '#5F5C6B', 
    marginLeft: 10, 
    marginRight: 10 
  },
  progressBarFill: { 
    height: '100%', 
    backgroundColor: COLORS.purpleDark 
  },
  heartContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  heartIcon: { 
    width: 30, 
    height: 30, 
    marginRight: 10,
    resizeMode: 'contain'
  },
  body: { 
    padding: 20 
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: COLORS.purple,
    textAlign: 'center'
  },
  owlImage: { 
    width: 100, 
    height: 100, 
    marginBottom: 20 ,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  answerButton: { 
    padding: 10, 
    backgroundColor: 'white', 
    marginBottom: 10, 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.purpleLight
  },
  correct: { 
    backgroundColor: COLORS.greenDark
  },
  incorrect: { 
    backgroundColor: COLORS.red
  },
  optionText: { 
    fontSize: 16, 
    color: COLORS.purpleLight 
  },
  modalBackground: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white' 
  },
  modalContent: { 
    width: 300, 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 10 ,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: COLORS.purple ,
    textAlign: 'center',
    marginVertical: 10
  },
  modalButton: { 
    marginTop: 20, 
    backgroundColor: COLORS.purple, 
    padding: 10, 
    borderRadius: 5 
  },
  modalButtonText: { 
    color: '#fff', 
    fontSize: 18, 
    textAlign: 'center' 
  },
  money: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  textMoney: { 
    color: COLORS.greenDark, 
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textHeart: { 
    color: COLORS.redDark, 
    fontSize: 18, 
    fontWeight: 'bold' ,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  column: {
    borderWidth: 1,
    padding: 16,
    borderColor: '#E8E3FA',
    borderRadius: 8,
    marginHorizontal: 16
  },
  text: {
    textAlign: 'center',
    color: COLORS.purpleDark,
    marginVertical: 8
  },
  modalDescription: {
    color: COLORS.purpleDark,
    fontSize: 32,
    textAlign: 'center'
  },
});
