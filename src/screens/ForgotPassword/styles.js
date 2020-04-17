import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  bottomView: {
    paddingVertical: 80,
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default styles;
