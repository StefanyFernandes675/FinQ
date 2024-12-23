import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonIcon: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderColor: '#E8E3FA',
    borderWidth: 1,
    borderRadius: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.purpleDark,
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: COLORS.purpleLight,
  },
  textInput: {
    fontFamily: 'archivo',
    fontSize: 12,
    color: COLORS.purpleLight,
    marginVertical: 12,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  preferenceButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: COLORS.purpleLight,
    borderRadius: 8,
  },
  preferenceText: {
    color: 'white',
    fontSize: 16,
  },
  selected: {
    backgroundColor: COLORS.purple,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.purpleDark,
  },
});
