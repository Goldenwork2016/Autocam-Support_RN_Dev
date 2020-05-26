import React, {useState, useContext} from 'react';
import {
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
  Platform,
  Alert,
} from 'react-native';
import {NavigationContext} from 'react-navigation';
import api from '~/server/index';

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

  filterData = async () => {
    if (email === '' || password === '') {
      return Alert.alert(
        'Empty Fields',
        'fill in the required fields',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
    const res = await sendData();
    Alert.alert(
      'Empty Fields',
      res,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
    res.status === 200
      ? clearInput()
      : Alert.alert(
          'Something went wrong!',
          'Please check again your email and password!',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
  };

  sendData = async () => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('device_type', Platform.OS === 'ios' ? '0' : '1');
    data.append('device_token', '');

    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    const res = await api.post('/user/user_login', data, headers);
    return res.data;
  };

  clearInput = () => {
    setEmail('');
    setPassword('');
    navigation.navigate('Products');
  };
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
        <Button noAuth title="Log In" onPress={() => filterData()} />

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
