import React, {useContext, useState} from 'react';
import {ImageBackground, StatusBar, View, Text, Image} from 'react-native';
import {CheckBox} from 'react-native-elements';

import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';

import Logo from '~/components/Logo';
import Button from '~/components/Button';
import Input from '~/components/Input';

import styles from './styles';
import bg from '~/assets/background/bg.png';
import logo from '~/assets/logo/logo.png';

import checkboxChecked from '~/assets/checkbox/check.png';
import checkboxUnchecked from '~/assets/checkbox/unchecked.png';

const Signup = () => {
  const navigation = useContext(NavigationContext);
  const [checked, setChecked] = useState(false);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />

      <Logo img={logo} lessMargin />
      <Input content="Full Name" />
      <Input content="Email Address" />
      <Input content="Password" password />
      <Input content="Confirm Password" password />

      <CheckBox
        center
        title={
          <Text style={styles.instructions}>
            I have read and agree to your{' '}
            <Text style={styles.underline}>Privacy policy </Text> and{' '}
            <Text style={styles.underline}>Terms of Use </Text>
          </Text>
        }
        iconLeft
        type="material"
        checkedIcon={
          <Image source={checkboxChecked} style={{width: 30, height: 30}} />
        }
        uncheckedIcon={
          <Image source={checkboxUnchecked} style={{width: 30, height: 30}} />
        }
        checked={checked}
        containerStyle={styles.instructionsContainer}
        onPress={() => setChecked(!checked)}
      />

      <View style={styles.bottomView}>
        <Button
          noAuth
          title="Sign Up"
          onPress={() => navigation.navigate('CreateAccount')}
        />

        <View>
          <Text style={[styles.bottomInstructions]}>
            Already Have An Account?
          </Text>

          <Button
            noAuth
            title="Log In"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Signup;
