import React, {useContext, useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {connect} from 'react-redux';
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
import Overlay from '~/components/Overlay';
import Paypal from '~/screens/Paypal';

const CheckOut = ({clearOrderedProducts}) => {
  const navigation = useContext(NavigationContext);
  const {user} = useContext(UserContext);

  // States
  const [editAddress, setEditAddress] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(false);

  const myServices = navigation.getParam('myServices');

  const subTotal = navigation.state.params.subTotal;

  const paymentClosed = (paymentReceived = false) => {
    console.log(12);
    setShowCreditCard(false);

    if (paymentReceived) {
      console.log('Paid');
      clearOrderedProducts();
      navigation.navigate('Products');
    }
  };

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
          <Overlay
            behind={
              <Input
                containerStyle={styles.paddingLeft}
                inputContainerStyle={styles.input}
                placeholder="**** **** **** 1233"
                leftIcon={<Image source={visa} style={styles.image} />}
                onChangeText={(text) => {
                  console.log(text);
                }}
              />
            }
            front={
              <ButtonComponent
                customContainerStyle={{
                  backgroundColor: 'transparent',
                }}
                customTitleStyle={{
                  textAlign: 'left',
                  color: '#676767',
                }}
                title=" "
                onPress={() => Alert.alert('Pay With Paypahl')}
              />
            }
          />
          <Overlay
            behind={
              <Input
                containerStyle={styles.paddingLeft}
                inputContainerStyle={styles.input}
                placeholder="jacky@gmail.com"
                leftIcon={<Image source={paypal} style={styles.image} />}
                rightIcon={<Icon name="check" color={colors.lightGrey} />}
              />
            }
            front={
              <ButtonComponent
                title=" "
                customContainerStyle={{
                  backgroundColor: 'transparent',
                }}
                customTitleStyle={{
                  textAlign: 'left',
                  color: '#676767',
                }}
                onPress={() => setShowCreditCard(true)}
              />
            }
          />
          {showCreditCard && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={showCreditCard}>
              <View style={styles.modalView}>
                <Paypal
                  closeView={paymentClosed}
                  price={subTotal}
                  currency="USD"
                />
              </View>
            </Modal>
          )}
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

function mapStateToProps(state) {
  return {
    orderedProducts: state.orderedProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearOrderedProducts: (products) => dispatch({type: 'CLEAR', products}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
