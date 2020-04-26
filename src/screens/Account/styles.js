import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: '5%',
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
    color: colors.lightGrey,
  },
  button: {
    marginVertical: '5%',
  },
});

export default styles;
