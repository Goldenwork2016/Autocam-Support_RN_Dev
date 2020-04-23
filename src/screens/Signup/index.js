import React, {useContext, useState} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';

import {NavigationContext} from 'react-navigation';

import Logo from '~/components/Logo';
import Button from '~/components/Button';
import Input from '~/components/Input';

import styles from './styles';
import bg from '~/assets/background/bg.png';
import logo from '~/assets/logo/logo.png';

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
        checkedIcon={<Icon name="check-box" />}
        uncheckedIcon={<Icon name="check-box-outline-blank" />}
        checked={checked}
        containerStyle={styles.instructionsContainer}
        onPress={() => setChecked(!checked)}
      />

      <View style={styles.bottomView}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('CreateAccount')}
        />

        <View>
          <Text style={[styles.bottomInstructions]}>
            Already Have An Account?
          </Text>

          <Button title="Log In" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Signup;
