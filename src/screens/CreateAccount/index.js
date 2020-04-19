import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';

import {NavigationContext} from 'react-navigation';

import Title from '~/components/Title';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import Input from '~/components/Input';

import styles from './styles';
import bg from '~/assets/background/bg.png';
import emptyProfile from '~/assets/emptyProfile/empty-profile.png';

const CreateAccount = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <Title title="Create Account" goBack />

      <Logo img={emptyProfile} noMargin />

      <Input content="City" />
      <Input content="Country" />
      <Input content="Email Address" />
      <Input content="Password" password />
      <Input content="Confirm Password" password />

      <View style={styles.button}>
        <Button title="Save" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
};

export default CreateAccount;
