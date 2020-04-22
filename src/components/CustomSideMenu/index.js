import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Title from '~/components/Title';

import menu from '~/assets/menu/hamburger.png';
import emptyProfile from '~/assets/emptyProfile/empty-profile.png';
import colors from '~/styles';

const items = [
  {
    navOptionName: 'Place Orders',
    screenToNavigate: 'Products',
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
    screenToNavigate: 'Login',
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
    marginTop: 10,
    borderRadius: 150 / 2,
  },
  img: {
    paddingLeft: '5%',
    alignSelf: 'baseline',
  },
});

const CustomSidebarMenu = ({navigation}) => {
  return (
    <View style={styles.sideMenuContainer}>
      <TouchableOpacity
        style={styles.img}
        onPress={() => navigation.closeDrawer()}>
        <Image source={menu} resizeMode="contain" />
      </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => {
              item.navOptionName === 'Place Orders'
                ? navigation.closeDrawer()
                : navigation.navigate(item.screenToNavigate);
            }}
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
                color: colors.lightGrey,
              }}>
              {item.navOptionName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CustomSidebarMenu;
