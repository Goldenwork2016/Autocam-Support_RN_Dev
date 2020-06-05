import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 12,
  },
  listContainer: {
    marginTop: '10%',
  },
  button: {
    flex: 0.3,
    paddingTop: '4%',
  },
});

export default styles;
