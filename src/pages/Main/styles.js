import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  login: {
    color: '#676767',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    alignItems: 'center',
    marginVertical: (Dimensions.get('window').height * 0.11) / 2,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
  instructions: {
    color: '#5E5E5E',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  alignRight: {
    marginLeft: Dimensions.get('window').width * 0.11 * 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: Dimensions.get('window').width * 0.11 * 2.5,
    backgroundColor: '#C8C8C8',
    borderColor: '#787878',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
  },
  inputContainer: {
    borderBottomWidth: 0.2,
    borderWidth: 0.3,
    borderColor: '#787878',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#F2F2F2',
  },
  bottomView: {
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  bottomText: {
    paddingBottom: 10,
  },
});

export default styles;
