import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {},
  title: {
    color: '#898989',
    alignSelf: 'baseline',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: Dimensions.get('window').width * 0.08,
  },
  button: {
    marginBottom: '5%',
  },
});

export default styles;
