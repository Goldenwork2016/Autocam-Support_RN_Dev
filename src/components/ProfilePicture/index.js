import React from 'react';

import {StyleSheet, Dimensions, Image} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';

const styles = StyleSheet.create({
  logoSmall: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 2.5,
    width: Dimensions.get('window').height * 0.11 * 5,
    height: Dimensions.get('window').height * 0.11 * 3,
    borderRadius: 80,
  },
  lessMarginSmall: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 6,
    width: Dimensions.get('window').height * 0.11 * 5,
    height: Dimensions.get('window').height * 0.11 * 3,
    borderRadius: 80,
  },
  logo: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 2,
    width: Dimensions.get('window').height * 0.11 * 5,
    height: Dimensions.get('window').height * 0.11 * 3,
    borderRadius: 80,
  },
  lessMargin: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 6,
    width: Dimensions.get('window').height * 0.11 * 2,
    height: Dimensions.get('window').height * 0.11 * 2,
    borderRadius: 80,
  },
});
const Profile = ({img, lessMargin}) => {
  if (Dimensions.get('window').height < 650) {
    return !lessMargin ? (
      <Image
        source={img}
        style={[
          styles.logoSmall,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
        ]}
        resizeMode="contain"
      />
    ) : (
      <Image
        source={img}
        style={[
          styles.lessMarginSmall,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
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
        {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
      ]}
      resizeMode="contain"
    />
  ) : (
    <Image
      source={img}
      style={[
        styles.lessMargin,
        {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
      ]}
      resizeMode="contain"
    />
  );
};

export default Profile;
