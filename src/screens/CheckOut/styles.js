import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 2,
  },
  listContainer: {
    marginTop: '10%',
    marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
  },
  list: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingVertical: '4%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomWidth: 0,
    marginTop: '2%',
    backgroundColor: colors.snowWhite,
  },
  card: {
    borderBottomWidth: 0.2,
    paddingVertical: '4%',
  },
  paddingLeft: {
    paddingLeft: '2.5%',
  },
  button: {
    paddingTop: Dimensions.get('window').height * 0.11 * 0.8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'bold',
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default styles;
