import React from 'react';

import {StyleSheet, Dimensions, View, Image} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoSmall: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 2.5,
    width: 150,
    height: 150,
    borderRadius: 300,
  },
  lessMarginSmall: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 6,
    width: 150,
    height: 150,
    borderRadius: 300,
  },
  logo: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 2,
    width: 150,
    height: 150,
    borderRadius: 300,
  },
  lessMargin: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height * 0.11) / 6,
    width: 150,
    height: 150,
    borderRadius: 300,
  },
});
const Profile = ({img, lessMargin, uri}) => {
  if (Dimensions.get('window').height < 650) {
    return !lessMargin ? (
      <Image
        source={uri ? {uri: uri} : img}
        style={[
          styles.logoSmall,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
        ]}
        resizeMode="contain"
      />
    ) : (
      <Image
        source={uri ? {uri: uri} : img}
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
      source={uri ? {uri: uri} : img}
      style={[
        styles.logo,
        {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
      ]}
      resizeMode="contain"
    />
  ) : (
    <Image
      source={uri ? {uri: uri} : img}
      style={[
        styles.lessMargin,
        {marginTop: useHeaderHeight() + useHeaderHeight() / 10},
      ]}
      resizeMode="contain"
    />
  );
};

export default Profile;
