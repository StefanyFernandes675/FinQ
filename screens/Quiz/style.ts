import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 40,
  },
  classContainer: {
    marginBottom: 20,
    backgroundColor: '#FAF9FF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  classHeader: {
    marginBottom: 10,
  },
  classTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.purpleDark,
    textAlign: 'center'
  },
  progressContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  progressText: {
    marginTop: 5,
    fontSize: 14,
    color: COLORS.purpleDark,
    textAlign: 'center',
  },
  quizItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  quizText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.purpleDark,
  },
  quizDetails: {
    fontSize: 14,
    color: COLORS.purpleDark,
  },
  status: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.purpleDark,
  },
});
