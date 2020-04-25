import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
  },
  button: {
    paddingTop: '4%',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '4%',
    borderBottomWidth: 0.8,
  },
  list: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
