import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    position: 'absolute',
  },
  login: {
    color: colors.lightGrey,
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
    color: colors.grey,
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
    backgroundColor: colors.darkWhite,
    borderColor: colors.lightestGrey,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
  },
  inputContainer: {
    borderBottomWidth: 0.3,
    borderWidth: 0.3,
    borderColor: colors.lightestGrey,
    marginVertical: 10,
  },
  input: {
    backgroundColor: colors.snowWhite,
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
