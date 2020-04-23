import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';

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
    screenToNavigate: 'Rma',
  },
  {
    navOptionName: 'Billing',
    screenToNavigate: 'NavsScreen1',
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
  const getActiveRouteState = function (route) {
    if (
      !route.routes ||
      route.routes.length === 0 ||
      route.index >= route.routes.length
    ) {
      return route;
    }

    const childActiveRoute = route.routes[route.index];
    return getActiveRouteState(childActiveRoute);
  };

  const routeName = getActiveRouteState(navigation.state).routeName;

  return (
    <View style={styles.sideMenuContainer}>
      <TouchableOpacity
        style={styles.img}
        onPress={() => navigation.closeDrawer()}>
        <Image source={menu} resizeMode="contain" />
      </TouchableOpacity>
      <Image source={emptyProfile} style={styles.sideMenuProfileIcon} />
      <Text style={{color: colors.lightGrey, fontSize: 26, fontWeight: 'bold'}}>
        Chris Nweke
      </Text>
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
            onPress={() =>
              routeName !== item.screenToNavigate
                ? navigation.navigate(item.screenToNavigate)
                : navigation.dispatch(DrawerActions.closeDrawer())
            }
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
