import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';
import {Input} from 'react-native-elements';
import colors from '~/styles';

const styles = StyleSheet.create({
  inputContainerSmall: {
    borderBottomWidth: 0.3,
    borderWidth: 0.3,
    borderColor: colors.lightestGrey,
    marginTop: (Dimensions.get('window').height * 0.1) / 20,
    marginHorizontal: (Dimensions.get('window').width * 0.1) / 2,
    width: Dimensions.get('window').width * 0.8,
  },
  inputContainer: {
    borderBottomWidth: 0.3,
    borderWidth: 0.3,
    borderColor: colors.lightestGrey,
    marginTop: (Dimensions.get('window').height * 0.1) / 6,
    marginHorizontal: (Dimensions.get('window').width * 0.1) / 2,
    width: Dimensions.get('window').width * 0.8,
  },
  input: {
    backgroundColor: colors.snowWhite,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});

const InputField = ({content, password}) =>
  Dimensions < 400 ? (
    <Input
      placeholder={content}
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainerSmall}
      placeholderTextColor={colors.opacityWhite}
      secureTextEntry={password ? true : false}
    />
  ) : (
    <Input
      placeholder={content}
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      placeholderTextColor={colors.opacityWhite}
      secureTextEntry={password ? true : false}
    />
  );

export default InputField;
