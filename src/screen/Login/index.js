import React from 'react';
import {
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {Input, Button} from 'react-native-elements';

import colors from '../../styles';

import styles from './styles';
import bg from '../../assets/background/bg.png';
import logo from '../../assets/logo/logo.png';

const Login = () => (
  <ImageBackground source={bg} style={styles.container} resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="white" />
    <Text style={styles.login}>Login</Text>

    <Image source={logo} style={styles.logo} resizeMode="contain" />
    <Input
      placeholder="Email Address"
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      placeholderTextColor={colors.opacityWhite}
    />
    <Input
      placeholder="Password"
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      placeholderTextColor={colors.opacityWhite}
      secureTextEntry={true}
    />
    <TouchableOpacity style={styles.alignRight}>
      <Text style={styles.instructions}>Forgot Password?</Text>
    </TouchableOpacity>

    <View style={styles.bottomView}>
      <Button
        title="Log In"
        buttonStyle={styles.button}
        titleStyle={{color: colors.lightGrey}}
      />

      <View>
        <Text style={[styles.instructions, styles.bottomText]}>
          Don't Have An Account?
        </Text>

        <Button
          title="Sign Up"
          buttonStyle={styles.button}
          titleStyle={{color: colors.lightGrey}}
        />
      </View>
    </View>
  </ImageBackground>
);

export default Login;
