import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 2,
  },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
    marginBottom: '10%',
  },
  list: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
    marginBottom: 10,
  },
  button: {
    borderTopWidth: 0.8,
    marginHorizontal: '1%',
  },
  productBg: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DBDBDB',
    borderRadius: 75,
    width: 100,
    height: 100,
  },
  productImage: {
    width: 60,
    height: 60,
  },
  image: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.lightGrey,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.lightGrey,
  },
  amount: {
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color: colors.lightGrey,
  },
  price: {
    paddingHorizontal: 5,
    letterSpacing: 0,
    fontSize: 16,
    color: colors.lightGrey,
  },
});

export default styles;
