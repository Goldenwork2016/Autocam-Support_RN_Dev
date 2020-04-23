import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';

import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';

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

      <Logo img={emptyProfile} lessMargin />

      <Input content="City" />
      <Input content="Country" />
      <Input content="Phone Number" />
      <Input content="Company Name" />
      <Input content="Company Address" />

      <View style={styles.button}>
        <Button title="Save" onPress={() => navigation.navigate('Products')} />
      </View>
    </ImageBackground>
  );
};

export default CreateAccount;
