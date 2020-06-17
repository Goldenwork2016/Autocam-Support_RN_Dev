import React, {useState} from 'react';

import {StyleSheet, Dimensions} from 'react-native';
import {Input} from 'react-native-elements';
import colors from '~/styles';

const styles = StyleSheet.create({
  inputContainerSmall: {
    borderBottomWidth: 0.3,
    borderWidth: 0.3,
    borderColor: colors.lightestGrey,
    marginBottom: (Dimensions.get('window').height * 0.1) / 20,
    width: Dimensions.get('window').width * 0.8,

    backgroundColor: 'blue',
  },
  inputContainerSmallHalf: {
    borderBottomWidth: 0.3,
    borderWidth: 0.3,
    borderColor: colors.lightestGrey,
    marginBottom: (Dimensions.get('window').height * 0.1) / 20,
    flex: 0.5,
  },
  inputContainer: {
    borderBottomWidth: 0.3,
    borderWidth: 0.3,
    borderColor: colors.lightestGrey,
    marginBottom: (Dimensions.get('window').height * 0.1) / 6,
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: 'blue',
  },
  inputContainerHalf: {
    borderBottomWidth: 0.3,
    borderWidth: 0.3,
    borderColor: colors.lightestGrey,
    marginBottom: (Dimensions.get('window').height * 0.1) / 6,
    flex: 0.5,
  },
  input: {
    backgroundColor: colors.snowWhite,
    color: colors.lightGrey,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
  disabledInput: {
    backgroundColor: colors.snowWhite,
    fontWeight: '700',
    paddingHorizontal: 4,
    paddingVertical: 0,
    opacity: 1,
    fontSize: 14,
  },
});

const InputField = ({
  content,
  password,
  disabled,
  value,
  setInputValue,
  half = false,
}) => {
  return Dimensions.get('window').height < 650 ? (
    <Input
      clearButtonMode="always"
      placeholder={content}
      placeholderTextColor={disabled ? colors.lightGrey : colors.opacityWhite}
      value={value}
      inputStyle={styles.input}
      inputContainerStyle={
        half ? styles.inputContainerSmallHalf : styles.inputContainerSmall
      }
      secureTextEntry={password ? true : false}
      disabled={disabled ? disabled : false}
      disabledInputStyle={styles.disabledInput}
      onChangeText={setInputValue}
    />
  ) : (
    <Input
      clearButtonMode="always"
      placeholder={content}
      placeholderTextColor={disabled ? colors.lightGrey : colors.opacityWhite}
      value={value}
      inputStyle={styles.input}
      inputContainerStyle={
        half ? styles.inputContainerHalf : styles.inputContainer
      }
      secureTextEntry={password ? true : false}
      disabled={disabled ? disabled : false}
      disabledInputStyle={styles.disabledInput}
      onChangeText={setInputValue}
    />
  );
};

export default InputField;
