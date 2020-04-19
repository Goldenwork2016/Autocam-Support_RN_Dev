import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import colors from '~/styles';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    marginHorizontal: 20,
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: colors.darkWhite,
    borderColor: colors.lightestGrey,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 2,
    borderRadius: 3,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
  },
});

const Btn = ({title, onPress}) => (
  <Button
    title={title}
    buttonStyle={styles.button}
    titleStyle={{color: colors.lightGrey}}
    onPress={onPress}
  />
);

export default Btn;
