import React, {useContext, useState, useEffect} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

import {NavigationContext} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import Logo from '~/components/Logo';
import Button from '~/components/Button';
import Input from '~/components/Input';

import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';
import emptyProfile from '~/assets/emptyProfile/empty-profile.png';

const Account = () => {
  const navigation = useContext(NavigationContext);
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  getUser = async () => {
    const info = await AsyncStorage.getItem('@user');
    await setUser(JSON.parse(info));
    filterNameSurname();
  };

  filterNameSurname = () => {
    const arr = user.fullname.split(/ (.*)/);
    setName(arr[0]);
    setSurname(arr[1]);
  };

  useEffect(() => {
    try {
      getUser();
    } catch (err) {
      console.log(err);
      // Error retrieving data
      throw err;
    }
  }, []);

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
        <Logo img={emptyProfile} lessMargin />
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
            onPress={() => setEdit(!edit)}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Account;
