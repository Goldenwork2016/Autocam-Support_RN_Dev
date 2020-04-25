import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';

import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';

import Logo from '~/components/Logo';
import Button from '~/components/Button';
import Input from '~/components/Input';

import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';
import emptyProfile from '~/assets/emptyProfile/empty-profile.png';

const Account = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />

      <Logo img={emptyProfile} lessMargin />

      <View style={styles.row}>
        <Text style={styles.title}>First Name</Text>
        <Input content="Christobel" disabled />
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Surname</Text>
        <Input content="Nweke" disabled />
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Email</Text>
        <Input content="chris.newke@gmail.com" disabled />
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Phone Number</Text>
        <Input content="+1 919 590 5228" disabled />
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Address</Text>
        <Input content="123 St.Huntsville" disabled />
      </View>

      <View style={styles.button}>
        <Button
          noAuth
          title="Change Password"
          onPress={() => navigation.navigate('AuthEnterEmail')}
        />
      </View>

      <View style={styles.button}>
        <Button
          noAuth
          title="Edit Profile"
          onPress={() => navigation.navigate('AuthEnterEmail')}
        />
      </View>
    </ImageBackground>
  );
};

export default Account;
