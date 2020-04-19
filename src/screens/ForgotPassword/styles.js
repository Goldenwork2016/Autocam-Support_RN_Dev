import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 2,
    alignItems: 'center',
  },
  bottomView: {
    paddingVertical: (Dimensions.get('window').width * 0.1) / 0.5,
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default styles;
