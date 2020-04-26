import React, {useContext, useState} from 'react';
import {ImageBackground, StatusBar, View, Text, Dimensions} from 'react-native';

import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';

import Logo from '~/components/Logo';
import Button from '~/components/Button';
import Input from '~/components/Input';

import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';
import emptyProfile from '~/assets/emptyProfile/empty-profile.png';

const Account = () => {
  const navigation = useContext(NavigationContext);
  const [edit, setEdit] = useState(false);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View
        style={{
          paddingHorizontal: (Dimensions.get('window').width * 0.1) / 4,
          marginVertical: 0,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Logo img={emptyProfile} lessMargin />
        <View>
          <Text style={styles.title}>First Name</Text>
          <Input content="Christobel" disabled={edit ? false : true} />
        </View>
        <View>
          <Text style={styles.title}>Surname</Text>
          <Input content="Nweke" disabled={edit ? false : true} />
        </View>
        <View>
          <Text style={styles.title}>Email</Text>
          <Input
            content="chris.newke@gmail.com"
            disabled={edit ? false : true}
          />
        </View>
        <View>
          <Text style={styles.title}>Phone Number</Text>
          <Input content="+1 919 590 5228" disabled={edit ? false : true} />
        </View>
        <View>
          <Text style={styles.title}>Address</Text>
          <Input content="123 St.Huntsville" disabled={edit ? false : true} />
        </View>
      </View>

      <Button
        noAuth
        title="Change Password"
        onPress={() => navigation.navigate('AuthEnterEmail')}
      />
      <View style={styles.button}>
        <Button
          noAuth
          title={edit ? 'Save Profile' : 'Edit Profile'}
          onPress={() => setEdit(!edit)}
        />
      </View>
    </ImageBackground>
  );
};

export default Account;
