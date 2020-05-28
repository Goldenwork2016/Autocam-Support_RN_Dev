import React, {useContext, useState, useEffect} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Context} from '~/Store/index';

import {NavigationContext} from 'react-navigation';
import api from '~/server/index';

import Logo from '~/components/Logo';
import Profile from '~/components/ProfilePicture';
import Button from '~/components/Button';
import Input from '~/components/Input';

import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';
import emptyProfile from '~/assets/emptyProfile/empty-profile.png';

const Account = () => {
  const navigation = useContext(NavigationContext);
  const {user, setUser} = useContext(Context);
  const [avatarSource, setAvatarSource] = useState(null);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [changePhoto, setChangePhoto] = useState(false);
  const [surname, setSurname] = useState('');

  filterNameSurname = () => {
    const arr = user.fullname.split(/ (.*)/);
    setName(arr[0]);
    setSurname(arr[1]);
    const source = {uri: user.photo_url};
    source.uri !== '' ? setAvatarSource(source) : setAvatarSource(null);
  };

  useEffect(() => {
    try {
      console.log(user);
      filterNameSurname();
    } catch (err) {
      console.log(err);
      // Error retrieving data
      throw err;
    }
  }, []);

  createData = () => {
    try {
      const fullname = name + ' ' + surname;
      setUser((prevState) => ({
        ...prevState,
        fullname: fullname,
      }));

      const data = new FormData();
      data.append('userID', user.userID);
      data.append('email', user.email);
      data.append('fullname', name + ' ' + surname);
      data.append('city', user.city);
      data.append('country', user.country);
      data.append('phonenumber', user.phonenumber);
      data.append('company_address', user.company_address);

      changePhoto
        ? data.append('photo', {
            uri: avatarSource.uri,
            type: avatarSource.type,
            name: avatarSource.name,
          })
        : null;

      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  sendData = async () => {
    const headers = {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    };

    const data = await createData();

    try {
      const res = await api.post('/user/user_update_profile', data, headers);
      setEdit(!edit);
      setChangePhoto(!changePhoto);
      res.data.userinfo && (await setUser(res.data.userinfo));
      navigation.push('Account');
    } catch (err) {
      console.log('err => ', err);
      throw err;
    }
  };

  selectImage = async () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };

        setAvatarSource(source);
        setChangePhoto(!changePhoto);
      }
    });
  };

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View
        style={{
          paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
          marginVertical: 0,
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        {avatarSource &&
          (edit ? (
            <TouchableOpacity onPress={() => selectImage()}>
              <Profile lessMargin uri={avatarSource.uri} />
            </TouchableOpacity>
          ) : (
            <Profile lessMargin uri={avatarSource.uri} />
          ))}
        {!avatarSource && (
          <TouchableOpacity onPress={() => selectImage()}>
            <Logo img={emptyProfile} lessMargin />
          </TouchableOpacity>
        )}

        <ScrollView style={{maxHeight: '60%', width: '100%', marginLeft: 0}}>
          <View>
            <Text style={styles.title}>Name</Text>
            <Input
              content={user ? name : 'name'}
              disabled={edit ? false : true}
              value={user ? name : ''}
              setInputValue={(text) => setName(text)}
            />
          </View>
          <View>
            <Text style={styles.title}>Surname</Text>
            <Input
              content={user ? surname : 'name'}
              disabled={edit ? false : true}
              value={user ? surname : ''}
              setInputValue={(text) => setSurname(text)}
            />
          </View>
          <View>
            <Text style={styles.title}>Email</Text>
            <Input
              content={user ? user.email : 'email'}
              disabled={edit ? false : true}
              value={user ? user.email : ''}
              setInputValue={(text) =>
                setUser((prevState) => ({...prevState, email: text}))
              }
            />
          </View>
          <View>
            <Text style={styles.title}>Phone Number</Text>
            <Input
              content={user ? user.phonenumber : 'phone Number'}
              disabled={edit ? false : true}
              value={user ? user.phonenumber : ''}
              setInputValue={(text) =>
                setUser((prevState) => ({...prevState, phonenumber: text}))
              }
            />
          </View>
          <View>
            <Text style={styles.title}>Address</Text>
            <Input
              content={user ? user.company_address : 'address'}
              disabled={edit ? false : true}
              value={user ? user.company_address : ''}
              setInputValue={(text) =>
                setUser((prevState) => ({...prevState, company_address: text}))
              }
            />
          </View>
        </ScrollView>
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
            title={edit ? 'Save Profile' : 'Edit Profile'}
            onPress={() => (edit ? sendData() : setEdit(!edit))}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Account;
