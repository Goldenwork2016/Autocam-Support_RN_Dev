import React, {useContext} from 'react';
import {NavigationContext} from 'react-navigation';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '~/styles';
import backButton from '~/assets/backButton/backButton.png';
import menuButton from '~/assets/menu/hamburger.png';

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 10 : 0,
    flexDirection: 'row',
  },
  col1: {
    flex: 0.3,
  },
  col5: {
    flex: 0.5,
  },
  colMenu: {
    flex: 0.5,
  },
  col2: {
    flex: 0.8,
  },
  img: {
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
  loginWithButton: {
    color: colors.lightGrey,
    fontSize: 26,
    fontWeight: 'bold',
  },
  login: {
    marginTop: Platform.OS === 'ios' ? 15 : 0,
    color: colors.lightGrey,
    fontSize: 26,
    fontWeight: 'bold',
  },
});

const Title = ({title, Icon, small}) => {
  const navigation = useContext(NavigationContext);
  console.log('navigation => ', navigation);
  const IconOptions = {['goBack']: backButton, ['menu']: menuButton};

  return !Icon ? (
    <Text style={styles.login}>{title}</Text>
  ) : (
    <View style={styles.container}>
      <View
        style={
          !small
            ? Icon === 'goBack'
              ? styles.col1
              : styles.colMenu
            : styles.col5
        }>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            Icon === 'goBack' ? navigation.goBack() : navigation.openDrawer()
          }>
          <Image
            source={IconOptions[Icon]}
            style={styles.img}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.col2}>
        <Text style={styles.loginWithButton}>{title}</Text>
      </View>
    </View>
  );
};
export default Title;
