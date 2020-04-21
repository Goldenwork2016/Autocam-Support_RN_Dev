import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
    paddingVertical: (Dimensions.get('window').width * 0.1) / 2,
  },
  listContainer: {
    marginTop: '10%',
  },
  list: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingVertical: '4%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.8,
    marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
  },
  button: {
    paddingTop: Dimensions.get('window').height * 0.11 * 0.8,
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
});

export default styles;
