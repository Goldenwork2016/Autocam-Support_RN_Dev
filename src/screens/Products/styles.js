import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 2,
  },
  listContainer: {
    marginVertical: ' 20%',
  },
  list: {
    backgroundColor: 'transparent',
    paddingVertical: '8%',
  },
  button: {
    paddingTop: Dimensions.get('window').height * 0.11 * 0.8,
  },
});

export default styles;
