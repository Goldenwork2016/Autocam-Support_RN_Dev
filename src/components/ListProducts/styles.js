import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
    paddingVertical: Dimensions.get('window').height < 700 ? '5%' : '7%',
    borderBottomWidth: 2,
    borderBottomColor: colors.darkerGrey,
  },
  list: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
     marginHorizontal: Dimensions.get('window').height < 700 ? '5%' : '7%',
  },
  productBg: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DBDBDB',
    borderColor: colors.darkGrey,
    borderRadius: 75,
    width: 100,
    height: 100,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
  },
  productImage: {
    width: 60,
    height: 60,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default styles;
