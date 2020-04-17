import React from 'react';
import {Text, StyleSheet} from 'react-native';

import colors from '~/styles';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#515151',
    fontSize: 15,
    paddingVertical: 10,
  },
});

const Instruction = ({content}) => <Text style={styles.text}>{content}</Text>;

export default Instruction;
