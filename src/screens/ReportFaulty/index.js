import React, {useContext, useState} from 'react';
import {ImageBackground, StatusBar, View, Text, ScrollView} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';
import {Icon} from 'react-native-elements';

import styles from './styles';
import ButtonComponent from '~/components/Button';
import bg from '~/assets/background-white/whiteBg.png';
import SerialNumber from '~/components/SerialNumber';
const ReportFaulty = () => {
  const navigation = useContext(NavigationContext);
  const [serialAmount, setSerialAmount] = useState([0]);

  const pushSerialAmount = () => {
    setSerialAmount([...serialAmount, 0]);
  };
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />

      <ScrollView
        style={[
          styles.listContainer,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 8},
        ]}>
        {serialAmount.map((amount, index) => (
          <SerialNumber key={index} />
        ))}
        <View style={{borderTopWidth: 0.5, marginBottom: '4%'}} />

        <View style={{paddingVertical: '5%'}}>
          <ButtonComponent
            title="Add More Devices"
            onPress={() => pushSerialAmount()}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={[styles.title, {fontWeight: 'bold', paddingRight: '5%'}]}>
              RMA Invoice:
            </Text>
            <Icon name="backup" color={'#676767'} size={50} />
          </View>
          <View style={{paddingVertical: '5%'}}>
            <ButtonComponent
              title="Request PickUp"
              onPress={() => navigation.navigate('Rma')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ReportFaulty;
