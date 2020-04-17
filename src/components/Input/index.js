import React from 'react';

import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import colors from '~/styles';

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 0.3,
    borderWidth: 0.3,
    borderColor: colors.lightestGrey,
    marginVertical: 10,
  },
  input: {
    backgroundColor: colors.snowWhite,
  },
});

const InputField = ({content, password}) => (
  <Input
    placeholder={content}
    inputStyle={styles.input}
    inputContainerStyle={styles.inputContainer}
    placeholderTextColor={colors.opacityWhite}
    secureTextEntry={password ? true : false}
  />
);

export default InputField;
