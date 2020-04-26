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
    marginHorizontal: (Dimensions.get('window').width * 0.1) / 2,
    width: Dimensions.get('window').width * 0.8,
  },
  inputContainer: {
    borderBottomWidth: 0.3,
    borderWidth: 0.3,
    borderColor: colors.lightestGrey,
    marginBottom: (Dimensions.get('window').height * 0.1) / 6,
    marginHorizontal: (Dimensions.get('window').width * 0.1) / 2,
    width: Dimensions.get('window').width * 0.8,
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

const InputField = ({content, password, disabled, value}) => {
  const [inputValue, setInputValue] = value
    ? useState(content)
    : useState(false);

  return Dimensions.get('window').height < 650 ? (
    <Input
      clearButtonMode={value ? 'never' : 'always'}
      placeholder={inputValue ? inputValue : content}
      placeholderTextColor={disabled ? colors.lightGrey : colors.opacityWhite}
      value={value ? inputValue : null}
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainerSmall}
      secureTextEntry={password ? true : false}
      disabled={disabled ? disabled : false}
      disabledInputStyle={styles.disabledInput}
      onChange={(e) => setInputValue(e.target.value)}
    />
  ) : (
    <Input
      clearButtonMode={value ? 'never' : 'always'}
      placeholder={inputValue ? inputValue : content}
      placeholderTextColor={disabled ? colors.lightGrey : colors.opacityWhite}
      value={value ? inputValue : null}
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      secureTextEntry={password ? true : false}
      disabled={disabled ? disabled : false}
      disabledInputStyle={styles.disabledInput}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default InputField;
