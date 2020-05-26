import React, {useState, useContext} from 'react';
import {
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Logo from '~/components/Logo';

import styles from './styles';
import bg from '~/assets/background/bg.png';
import logo from '~/assets/logo/logo.png';

const Login = () => {
  const navigation = useContext(NavigationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <Logo img={logo} />

      <Input
        content="Email Address"
        value={email}
        setInputValue={(text) => setEmail(text)}
      />
      <Input
        content="Password"
        password
        value={password}
        setInputValue={(text) => setPassword(text)}
      />

      <TouchableOpacity
        style={styles.alignRight}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.instructions}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <Button
          noAuth
          title="Log In"
          onPress={() => navigation.navigate('Products')}
        />

        <View>
          <Text style={[styles.instructions, styles.bottomText]}>
            Don't Have An Account?
          </Text>

          <Button
            noAuth
            title="Sign Up"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
