import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View, Text, Image} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {Icon, Input, Button} from 'react-native-elements';

import Title from '~/components/Title';
import colors from '~/styles';
import styles from './styles';
import ButtonComponent from '~/components/Button';
import plus from '~/assets/plus-minus/bigPlus.png';
import bg from '~/assets/background-white/whiteBg.png';
import paypal from '~/assets/payments/paypal.png';
import visa from '~/assets/payments/visa.png';

const CheckOut = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />

      <Title title="Check Out" Icon="goBack" small />
      <View style={styles.listContainer}>
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
            buttonStyle={{
              backgroundColor: colors.darkWhite,
              borderColor: colors.lightestGrey,
              borderLeftWidth: 0.5,
              borderRightWidth: 0.5,
              borderBottomWidth: 2,
              borderRadius: 3,
              shadowColor: colors.black,
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.9,
              shadowRadius: 2,
              elevation: 8,
            }}
          />
        </View>
        <Text style={styles.paddingLeft}>
          123 York StBrooklyn, NY, 11201, USA
        </Text>
        <View style={{borderTopWidth: 0.2, marginTop: '4%'}} />
        <View style={styles.card}>
          <View style={styles.list}>
            <Text style={styles.title}>Payment Method</Text>
            <Image source={plus} />
          </View>
          <Input
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
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Summary</Text>
          <View style={styles.list}>
            <View style={styles.paddingLeft}>
              <Text style={styles.subtitle}>Subtotal</Text>
              <Text style={styles.subtitle}>Delivery Cost</Text>
              <Text style={styles.subtitle}>Discount</Text>
            </View>
            <View>
              <Text>$5759.00</Text>
              <Text style={{textAlign: 'right'}}>Free</Text>
              <Text>-$100.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.title}>Total</Text>
          <Text>$5659.00</Text>
        </View>
      </View>

      <View style={styles.button}>
        <ButtonComponent
          title="Send Order"
          onPress={() => navigation.navigate('Products')}
        />
      </View>
    </ImageBackground>
  );
};

export default CheckOut;
