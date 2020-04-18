import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  button: {
    paddingTop: Dimensions.get('window').height * 0.11 * 0.8,
  },
});

export default styles;
