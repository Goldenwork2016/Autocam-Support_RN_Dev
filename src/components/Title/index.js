import React, {useContext} from 'react';
import {NavigationContext} from 'react-navigation';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform
} from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '~/styles';
import backButton from '~/assets/backButton/backButton.png';

const styles = StyleSheet.create({
  container: {
   marginTop: Platform.OS=== "ios" ? 10 : 0,
    flexDirection: 'row',
  },
  col1: {
    flex: 0.3,
  },
  col2: {
    flex: 0.8,
  },
  img: {
    maxWidth: Dimensions.get('window').height * 0.11 * 3,
  },
  loginWithButton: {
    color: colors.lightGrey,
    fontSize: 22,
    fontWeight: 'bold',
  },
  login: {
    marginTop: Platform.OS=== "ios" ? 15 : 0,
    color: colors.lightGrey,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const Title = ({title, goBack}) => {
  const navigation = useContext(NavigationContext);

  return !goBack ? (
    <Text style={styles.login}>{title}</Text>
  ) : (
    <View style={styles.container}>
      <View style={styles.col1}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}>
          <Image source={backButton} style={styles.img} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View style={styles.col2}>
        <Text style={styles.loginWithButton}>{title}</Text>
      </View>
    </View>
  );
};
export default Title;
