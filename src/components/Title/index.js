import React from 'react';

import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  login: {
    color: colors.lightGrey,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
const Title = ({title}) => <Text style={styles.login}>{title}</Text>;

export default Title;
