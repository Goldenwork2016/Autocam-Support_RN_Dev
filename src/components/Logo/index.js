import React from 'react';

import {StyleSheet, Dimensions, Image} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    marginVertical: (Dimensions.get('window').height * 0.11) / 2,
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
});

const Logo = ({img}) => (
  <Image source={img} style={styles.logo} resizeMode="contain" />
);

export default Logo;
