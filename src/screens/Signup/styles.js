import {StyleSheet} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  instructionsContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginTop: 0,
  },
  instructions: {
    fontWeight: '500',
    color: colors.grey,
    fontSize: 12,
  },
  bottomInstructions: {
    color: colors.grey,
    fontSize: 14,
    textAlign: 'center',
  },
  bottomView: {
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default styles;
