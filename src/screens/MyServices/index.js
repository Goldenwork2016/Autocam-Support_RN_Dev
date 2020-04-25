import React, {useContext, useState} from 'react';
import {NavigationContext} from 'react-navigation';
import {ImageBackground, StatusBar, View, Text, Dimensions} from 'react-native';
import {Button, CheckBox, Icon} from 'react-native-elements';
import {useHeaderHeight} from 'react-navigation-stack';
import colors from '~/styles';
import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';
import ButtonComponent from '~/components/Button';

import devices from '~/config/myServices';

const MyServices = () => {
  const navigation = useContext(NavigationContext);
  const [checked, setChecked] = useState(false);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View
        style={{
          marginTop: useHeaderHeight() + useHeaderHeight() / 4,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: colors.lightGrey,
          }}>
          Device Hosted and Managed by Us
        </Text>
        <View
          style={{
            borderTopWidth: 0.8,
            marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
          }}
        />
        {devices.map((device, index) =>
          device.status ? (
            <View style={styles.list} key={index}>
              <Text
                style={{
                  fontSize: 20,
                  color: colors.lightGrey,
                }}>
                {device.number}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: colors.lightGrey,
                }}>
                Active
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: colors.lightGrey,
                }}>
                {device.date}
              </Text>
            </View>
          ) : (
            <View style={styles.list} key={index}>
              <CheckBox
                title={
                  <Text
                    style={{
                      fontSize: 20,
                      color: colors.lightGrey,
                    }}>
                    {device.number}
                  </Text>
                }
                iconLeft
                type="material"
                checkedIcon={
                  <Icon name="check-box" size={30} color="#676767" />
                }
                uncheckedIcon={
                  <Icon
                    name="check-box-outline-blank"
                    size={30}
                    color="#676767"
                  />
                }
                checked={checked}
                containerStyle={styles.instructionsContainer}
                onPress={() => setChecked(!checked)}
              />
              <Text
                style={{
                  fontSize: 20,
                  color: colors.lightGrey,
                }}>
                Expired
              </Text>
              <Button
                title="Renew"
                titleStyle={{color: colors.lightGrey}}
                buttonStyle={styles.button}
              />
            </View>
          ),
        )}
        <View style={{paddingTop: '10%'}}>
          <Text style={styles.title}>Add New Devices to Cloud</Text>
          <View
            style={{
              borderTopWidth: 0.8,
              marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
            }}
          />
          <View style={styles.list}>
            <CheckBox
              title={
                <Text
                  style={{
                    fontSize: 20,
                    color: colors.lightGrey,
                  }}>
                  985252
                </Text>
              }
              iconLeft
              type="material"
              checkedIcon={<Icon name="check-box" size={30} color="#676767" />}
              uncheckedIcon={
                <Icon
                  name="check-box-outline-blank"
                  size={30}
                  color="#676767"
                />
              }
              checked={checked}
              containerStyle={styles.instructionsContainer}
              onPress={() => setChecked(!checked)}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: colors.lightGrey,
                  marginRight: 8,
                }}>
                $279 per unit
              </Text>
              <Button
                title="Add"
                titleStyle={{color: colors.lightGrey}}
                buttonStyle={styles.button}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: '10%'}}>
          <Text style={styles.title}>Your Dedicated Server</Text>
          <View
            style={{
              borderTopWidth: 0.8,
              marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
            }}
          />
          <View style={styles.list}>
            <CheckBox
              title={
                <Text
                  style={{
                    fontSize: 20,
                    color: colors.lightGrey,
                  }}>
                  Deploy New Server
                </Text>
              }
              iconLeft
              type="material"
              checkedIcon={<Icon name="check-box" size={30} color="#676767" />}
              uncheckedIcon={
                <Icon
                  name="check-box-outline-blank"
                  size={30}
                  color="#676767"
                />
              }
              checked={checked}
              containerStyle={styles.instructionsContainer}
              onPress={() => setChecked(!checked)}
            />
            <Text style={styles.values}>$5000</Text>
          </View>
          <View style={styles.list}>
            <CheckBox
              title={
                <Text
                  style={{
                    fontSize: 20,
                    color: colors.lightGrey,
                  }}>
                  Renew License Fee on existing Server
                </Text>
              }
              iconLeft
              type="material"
              checkedIcon={<Icon name="check-box" size={30} color="#676767" />}
              uncheckedIcon={
                <Icon
                  name="check-box-outline-blank"
                  size={30}
                  color="#676767"
                />
              }
              checked={checked}
              containerStyle={styles.instructionsContainer}
              onPress={() => setChecked(!checked)}
            />
            <Text style={styles.values}>$4000</Text>
          </View>
          <View style={styles.list}>
            <CheckBox
              title={
                <Text
                  style={{
                    fontSize: 20,
                    color: colors.lightGrey,
                  }}>
                  Server Monthly Fee
                </Text>
              }
              iconLeft
              type="material"
              checkedIcon={<Icon name="check-box" size={30} color="#676767" />}
              uncheckedIcon={
                <Icon
                  name="check-box-outline-blank"
                  size={30}
                  color="#676767"
                />
              }
              checked={checked}
              containerStyle={styles.instructionsContainer}
              onPress={() => setChecked(!checked)}
            />
            <Text style={styles.values}>$120</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomButton}>
        <ButtonComponent
          title="Pay Now"
          onPress={() => navigation.navigate('CheckOut', {myServices: true})}
        />
      </View>
    </ImageBackground>
  );
};

export default MyServices;
