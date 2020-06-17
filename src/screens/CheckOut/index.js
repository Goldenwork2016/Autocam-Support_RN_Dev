import React, {useContext, useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';
import {Icon, Input, Button} from 'react-native-elements';
import {Context as UserContext} from '~/Store/index';
import colors from '~/styles';
import styles from './styles';
import ButtonComponent from '~/components/Button';
import plus from '~/assets/plus-minus/bigPlus.png';
import bg from '~/assets/background-white/whiteBg.png';
import paypal from '~/assets/payments/paypal.png';
import visa from '~/assets/payments/visa.png';

const CheckOut = () => {
  const navigation = useContext(NavigationContext);
  const {user} = useContext(UserContext);

  // States
  const [editAddress, setEditAddress] = useState(false);
  const myServices = navigation.getParam('myServices');

  const subTotal = navigation.state.params.subTotal;

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <ScrollView
        style={[
          styles.listContainer,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 8},
        ]}>
        {!myServices ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: '2%',
              }}>
              <Text style={styles.title}>Delivery Address</Text>
              <Button
                title="Change"
                titleStyle={{color: colors.lightGrey}}
                buttonStyle={styles.changeButton}
                onPress={() => setEditAddress(true)}
              />
            </View>
            <TextInput
              style={[
                styles.paddingLeft,
                {
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: colors.lightGrey,
                  borderWidth: 0,
                },
              ]}
              editable={editAddress}
              onChangeText={(text) => console.log(text)}
              value={`${user.company_address}, ${user.city}, ${user.country}`}
            />
          </View>
        ) : null}
        {!myServices ? (
          <View style={{borderTopWidth: 0.2, marginTop: '4%'}} />
        ) : null}
        <View style={styles.card}>
          <View style={styles.list}>
            <Text style={styles.title}>Payment Method</Text>
            <Image source={plus} />
          </View>
          {/* <Input
            containerStyle={styles.paddingLeft}
            inputContainerStyle={styles.input}
            placeholder="**** **** **** 1233"
            leftIcon={<Image source={visa} style={styles.image} />}
          />
         <Input
            containerStyle={styles.paddingLeft}
            inputContainerStyle={styles.input}
            placeholder="jacky@gmail.com"
            leftIcon={<Image source={paypal} style={styles.image} />}
            rightIcon={<Icon name="check" color={colors.lightGrey} />}
          />*/}
          <View style={[{marginVertical: 10}]}>
            <ButtonComponent
              title="Pay With Paypal"
              onPress={() => console.log('Pay With Paypal')}
            />
          </View>
          <View>
            <ButtonComponent
              title="Pay With Credit Card"
              onPress={() => console.log('Pay With Credit Card')}
            />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={[styles.title, styles.marginBottom]}>Summary</Text>
          <View style={styles.list}>
            <View style={styles.paddingLeft}>
              <Text style={[styles.subtitle, styles.marginBottom]}>
                Subtotal
              </Text>
              {!myServices ? (
                <Text style={[styles.subtitle, styles.marginBottom]}>
                  Delivery Cost
                </Text>
              ) : null}
            </View>
            <View>
              <Text style={(styles.marginBottom, {color: colors.lightGrey})}>
                ${subTotal}.00
              </Text>
              {!myServices ? (
                <Text
                  style={[
                    styles.marginBottom,
                    {textAlign: 'right', color: colors.lightGrey},
                  ]}>
                  Free
                </Text>
              ) : null}
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.title}>Total</Text>
          <Text style={{color: colors.lightGrey}}>${subTotal}.00</Text>
        </View>
      </ScrollView>
      <View>
        <ButtonComponent
          title="Send Order"
          onPress={() => navigation.navigate('Products')}
        />
      </View>
    </ImageBackground>
  );
};

export default CheckOut;
