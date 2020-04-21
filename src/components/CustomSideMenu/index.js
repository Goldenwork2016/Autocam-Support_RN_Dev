import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Title from '~/components/Title';

import emptyProfile from '~/assets/emptyProfile/empty-profile.png';
import colors from '~/styles';

const items = [
  {
    navOptionName: 'Place Orders',
    screenToNavigate: 'NavScreen1',
  },
  {
    navOptionName: 'RMA',
    screenToNavigate: 'NavScreen2',
  },
  {
    navOptionName: 'Billing',
    screenToNavigate: 'NavScreen3',
  },
  {
    navOptionName: 'Requests',
    screenToNavigate: 'NavScreen1',
  },
  {
    navOptionName: 'Account',
    screenToNavigate: 'NavScreen2',
  },
  {
    navOptionName: 'Material',
    screenToNavigate: 'NavScreen3',
  },
  {
    navOptionName: 'Logout',
    screenToNavigate: 'NavScreen3',
  },
];

const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.darkWhite,
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});

const CustomSidebarMenu = ({navigation, descriptors}) => (
  <View style={styles.sideMenuContainer}>
    <Image source={emptyProfile} style={styles.sideMenuProfileIcon} />
    <Title title="Chris Nweke" />

    <View
      style={{
        width: '80%',
        height: 0.5,
        backgroundColor: colors.white,
        marginTop: '20%',
      }}
    />
    {/*Setting up Navigation Options from option array using loop*/}
    <View style={{width: '80%'}}>
      {items.map((item, key) => (
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: colors.white,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: 'transparent',
          }}
          key={key}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}
            onPress={() => {
              global.currentScreenIndex = key;
              navigation.navigate(descriptors.CheckOut.key);
            }}>
            {item.navOptionName}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

export default CustomSidebarMenu;
