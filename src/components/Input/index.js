import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';
import {Input} from 'react-native-elements';
import colors from '~/styles';

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 0.3,
    borderWidth: 0.3,
    borderColor: colors.lightestGrey,
    marginVertical: 10,
    marginHorizontal: 20,
    width: Dimensions.get('window').width * 0.8,
  },
  input: {
    backgroundColor: colors.snowWhite,
    paddingHorizontal: 2,
    paddingVertical: 0,
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
