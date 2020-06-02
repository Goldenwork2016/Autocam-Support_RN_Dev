import React, {useContext} from 'react';
import {NavigationContext} from 'react-navigation';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useHeaderHeight} from 'react-navigation-stack';
import colors from '~/styles';
import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';
import plus from '~/assets/plus-minus/bigPlus.png';
import requests from '~/config/requests';

const Requests = () => {
  const navigation = useContext(NavigationContext);
  return (
    <ImageBackground source={bg} style={[styles.container]} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View style={{marginTop: useHeaderHeight() + useHeaderHeight() / 4}}>
        <View style={styles.inputLine} />
        {requests.map((request, index) => (
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('Response')}
            key={index}>
            <View>
              <View style={styles.list}>
                <Text
                  style={{
                    fontSize: 20,
                    color: colors.lightGrey,
                    width: '90%',
                  }}>
                  {request.name}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: '2%',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: colors.lightGrey,
                  }}>
                  {request.status}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.lightGrey,
                  }}>
                  {request.date}
                </Text>
              </View>
            </View>
            <Icon
              name="navigate-next"
              type="material"
              color={colors.lightGrey}
              size={55}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.plusButtonView}>
        <TouchableOpacity
          style={styles.plusButtonLink}
          onPress={() => navigation.navigate('CreateRequest')}>
          <Image style={styles.plusButton} source={plus} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Requests;
