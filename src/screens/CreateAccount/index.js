import React, {useState, useContext} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import {NavigationContext} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/server/index';

import Logo from '~/components/Logo';
import Profile from '~/components/ProfilePicture';
import Button from '~/components/Button';
import Input from '~/components/Input';

import styles from './styles';
import bg from '~/assets/background/bg.png';
import emptyProfile from '~/assets/emptyProfile/empty-profile.png';

const CreateAccount = () => {
  const navigation = useContext(NavigationContext);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [avatarSource, setAvatarSource] = useState(null);

  filterData = async () => {
    if (city === '' || country === '' || phoneNumber === '') {
      return Alert.alert(
        'Empty Fields',
        'fill in the required fields',
        [{text: 'OK'}],
        {cancelable: false},
      );
    }
    try {
      setId(await AsyncStorage.getItem('@user_info'));
      setLoading(true);
      const res = await sendData();
      res.status === 200
        ? clearInput()
        : Alert.alert(
            'Something went wrong!',
            'Please check all fields again!',
            [{text: 'OK'}],
            {cancelable: false},
          );
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  sendData = async () => {
    const data = new FormData();
    data.append('userID', id);
    data.append('city', city);
    data.append('country', country);
    data.append('phonenumber', phoneNumber);
    data.append('company_name', companyName);
    data.append('company_address', companyAddress);
    data.append('photo', avatarSource.uri);

    const headers = {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    };

    try {
      const res = await api.post('/user/user_update_profile', data, headers);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  clearInput = () => {
    setCity('');
    setCountry('');
    setPhoneNumber('');
    setCompanyName('');
    setCompanyAddress('');
    setAvatarSource(null);
    navigation.navigate('Products');
  };

  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  selectImage = async () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setAvatarSource(source);
      }
    });
  };

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />

      {avatarSource && (
        <TouchableOpacity onPress={() => selectImage()}>
          <Profile img={avatarSource} lessMargin />
        </TouchableOpacity>
      )}

      {!avatarSource && (
        <TouchableOpacity onPress={() => selectImage()}>
          <Logo img={emptyProfile} lessMargin />
        </TouchableOpacity>
      )}
      <Input
        content="City"
        value={city}
        setInputValue={(text) => setCity(text)}
      />
      <Input
        content="Country"
        value={country}
        setInputValue={(text) => setCountry(text)}
      />
      <Input
        content="Phone Number"
        value={phoneNumber}
        setInputValue={(text) => setPhoneNumber(text)}
      />
      <Input
        content="Company Name"
        value={companyName}
        setInputValue={(text) => setCompanyName(text)}
      />
      <Input
        content="Company Address"
        value={companyAddress}
        setInputValue={(text) => setCompanyAddress(text)}
      />
      <View style={styles.button}>
        <Button
          noAuth
          title="Save"
          onPress={() => filterData()}
          loading={loading}
        />
      </View>
    </ImageBackground>
  );
};

export default CreateAccount;
