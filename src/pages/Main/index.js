import React from 'react';
import {
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import styles from './styles';
import bg from '../../assets/background/bg.png';
import logo from '../../assets/logo/logo.png';

const Main = () => (
  <ImageBackground source={bg} style={styles.container} resizeMode='cover'>
    <StatusBar barStyle='light-content' backgroundColor='white' />
    <Text style={styles.login}>Login</Text>

    <Image source={logo} style={styles.logo} resizeMode='contain' />

    <Input
      placeholder='Email Address'
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
    />
    <Input
      placeholder='Password'
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
    />

    <TouchableOpacity>
      <Text style={[styles.instructions, styles.alignRight]}>
        Forgot Password?
      </Text>
    </TouchableOpacity>

    <View style={styles.bottomView}>
      <Button title='Log In' buttonStyle={styles.button} />

      <View>
        <Text style={[styles.instructions, styles.bottomText]}>
          Don't Have An Account?
        </Text>

        <Button title='Sign Up' buttonStyle={styles.button} />
      </View>
    </View>
  </ImageBackground>
);

export default Main;
