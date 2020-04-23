import React from 'react';

import {StyleSheet, Dimensions, Image} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';

const styles = StyleSheet.create({
  logoSmall: {
    alignItems: 'center',
    marginVertical: (Dimensions.get('window').height * 0.11) / 2.5,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
  lessMarginSmall: {
    alignItems: 'center',
    marginVertical: (Dimensions.get('window').height * 0.11) / 6,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
  logo: {
    alignItems: 'center',
    marginVertical: Dimensions.get('window').height * 0.11,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
  lessMargin: {
    alignItems: 'center',
    marginVertical: (Dimensions.get('window').height * 0.11) / 6,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
});
const Logo = ({img, lessMargin}) => {
  if (Dimensions.get('window').height < 650) {
    return !lessMargin ? (
      <Image
        source={img}
        style={[
          styles.logoSmall,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 8},
        ]}
        resizeMode="contain"
      />
    ) : (
      <Image
        source={img}
        style={[
          styles.lessMarginSmall,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 8},
        ]}
        resizeMode="contain"
      />
    );
  }
  return !lessMargin ? (
    <Image
      source={img}
      style={[
        styles.logo,
        {marginTop: useHeaderHeight() + useHeaderHeight() / 8},
      ]}
      resizeMode="contain"
    />
  ) : (
    <Image
      source={img}
      style={[
        styles.lessMargin,
        {marginTop: useHeaderHeight() + useHeaderHeight() / 8},
      ]}
      resizeMode="contain"
    />
  );
};

export default Logo;
