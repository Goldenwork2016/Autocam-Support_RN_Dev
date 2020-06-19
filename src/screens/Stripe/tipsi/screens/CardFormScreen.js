import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import stripe from 'tipsi-stripe';
import Button from '../components/Button';
import testID from '../utils/testID';
import api from '~/server/index';
import config from '~/appConfig';
import colors from '../../../../styles';

stripe.setOptions({
  publishableKey: config.stripeKey,
});

export default class CardFormScreen extends PureComponent {
  static title = 'Card Form';

  state = {
    loading: false,
    token: null,
  };

  handleCardPayPress = async () => {
    try {
      this.setState({loading: true, token: null});
      const token = await stripe.paymentRequestWithCardForm();
      const data = new FormData();
      data.append('amount', this.props.price);
      data.append('currency', this.props.currency);
      data.append('token', token.tokenId);
      data.append('description', this.props.description);
      const headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      };

      const res = await api.post('/user/pay_with_stripe', data, headers);
      console.log(JSON.stringify({data}));
      console.log(res);
      if (res.data.success) {
        Alert.alert('Success', 'Payment was made successfully');
        this.props.closeView(true);
      }
      if (!res.data.success) {
        throw res.data.err;
      }
      this.setState({loading: false, token});
    } catch (error) {
      console.log({error});
      this.setState({loading: false});
      Alert.alert('Failure', error);
    }
  };

  render() {
    const {loading} = this.state;

    console.log({
      a: this.props,
    });
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.darkGrey} />
        <Text style={styles.header}>Pay With Credit Card</Text>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableHighlight
            onPress={() => {
              this.props.closeView();
            }}
            style={styles.backToApp}
            underlayColor="royalblue">
            <Text style={{fontSize: 20, textAlign: 'center', color: '#fff'}}>
              Back to the AutoCam Store
            </Text>
          </TouchableHighlight>
        </View>

        <View
          style={{flex: 10, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              borderColor: colors.grey,
              borderWidth: 5,
              backgroundColor: colors.opacityWhite,
              borderRadius: 10,
              padding: 10,
            }}>
            <Text style={styles.instruction}>
              Click button to Pay With Credit Card
            </Text>
            <Button
              text="Enter you card and pay"
              loading={loading}
              onPress={this.handleCardPayPress}
              {...testID('cardFormButton')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'column',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 5,
    padding: 10,
    borderBottomColor: colors.lightestGrey,
    borderBottomWidth: 4,
    flex: 0.8,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    margin: 15,
    fontSize: 20,
  },
  token: {
    height: 20,
  },
  backToApp: {
    padding: 10,
    marginHorizontal: 60,
    backgroundColor: colors.darkestGrey,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
