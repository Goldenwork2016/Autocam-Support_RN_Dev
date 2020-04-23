import React, {useContext, useState} from 'react';
import {ImageBackground, StatusBar, View, Text, Image} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';

import {Input, CheckBox, Icon} from 'react-native-elements';

import colors from '~/styles';
import styles from './styles';
import ButtonComponent from '~/components/Button';
import plus from '~/assets/plus-minus/bigPlus.png';
import bg from '~/assets/background-white/whiteBg.png';
import paypal from '~/assets/payments/paypal.png';
import visa from '~/assets/payments/visa.png';

const ReportFaulty = () => {
  const navigation = useContext(NavigationContext);
  const [checked, setChecked] = useState(false);
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />

      <View
        style={[
          styles.listContainer,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 8},
        ]}>
        <View style={{borderTopWidth: 0.5, marginBottom: '4%'}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '2%',
          }}>
          <Text style={styles.title}>Serial Number</Text>
          <View style={styles.showSerial}>
            <Text style={{color: colors.lightGrey, textAlign: 'center'}}>
              9700283
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.list}>
            <Text style={styles.title}>Log Fault:</Text>
          </View>
          <Input
            inputContainerStyle={styles.input}
            inputStyle={{
              fontSize: 18,
              color: colors.opacityWhite,
              textAlignVertical: 'top',
            }}
            placeholder="Whats wrong?"
            multiline={true}
            numberOfLines={8}
          />
        </View>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '2%',
            }}>
            <Text style={styles.title}>Log Vehicle</Text>
            <View style={{width: '70%'}}>
              <Input
                placeholder="Vehicle ID"
                inputContainerStyle={{
                  width: '100%',
                  borderBottomWidth: 1,
                  borderWidth: 1,
                  borderColor: '#C0C0C0',
                }}
                inputStyle={{
                  paddingVertical: 0,
                  paddingRight: '5%',
                  margin: 0,
                  fontSize: 18,
                  color: colors.opacityWhite,
                  textAlign: 'right',
                }}
              />
            </View>
          </View>
          <View style={{padding: 0}}>
            <CheckBox
              type="material"
              title="Under Warranty"
              checkedIcon={
                <Icon name="radio-button-checked" color={'#959595'} />
              }
              uncheckedIcon={
                <Icon name="radio-button-unchecked" color={'#959595'} />
              }
              checked={!checked}
              onPress={() => setChecked(!checked)}
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                padding: 0,
                margin: 0,
              }}
              textStyle={{
                font: 13,
                color: '#959595',
              }}
            />
            <CheckBox
              type="material"
              title="Not Under Warranty"
              checkedIcon={
                <Icon name="radio-button-checked" color={'#959595'} />
              }
              uncheckedIcon={
                <Icon name="radio-button-unchecked" color={'#959595'} />
              }
              checked={checked}
              onPress={() => setChecked(!checked)}
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                padding: 0,
                margin: 0,
              }}
              textStyle={{
                font: 13,
                color: '#959595',
              }}
            />
          </View>
        </View>
        <View style={styles.list}>
          <ButtonComponent
            title="Add More Devices"
            onPress={() => navigation.navigate('Products')}
          />
        </View>
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
        <View style={styles.button}>
          <ButtonComponent
            title="Send Order"
            onPress={() => navigation.navigate('Products')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ReportFaulty;
