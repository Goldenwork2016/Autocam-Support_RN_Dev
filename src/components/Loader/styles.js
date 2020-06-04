import {StyleSheet} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 400,
    backgroundColor: colors.darkWhite,
  },
});

export default styles;
