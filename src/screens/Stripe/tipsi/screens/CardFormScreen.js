import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableHighlight,
  Platform,
} from 'react-native';
import stripe from 'tipsi-stripe';
import Button from '../components/Button';
import testID from '../utils/testID';
import api from '~/server/index';
import config from '~/appConfig';

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
      console.log({
        a: this.props,
      });
      this.setState({loading: true, token: null});
      const token = await stripe.paymentRequestWithCardForm();
      const data = new FormData();
      data.append('amount', this.props.amount);
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
    }
  };

  render() {
    const {loading, token} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.backToApp}>
          <View>
            <TouchableHighlight
              onPress={() => {
                this.props.closeView();
              }}
              underlayColor="royalblue">
              <Text style={{fontSize: 20, textAlign: 'center', color: '#fff'}}>
                Back to the AutoCam Store
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <Text style={styles.header}>Pay With Credit Card</Text>
        <Text style={styles.instruction}>
          Click button to show Card Form dialog.
        </Text>
        <Button
          text="Enter you card and pay"
          loading={loading}
          onPress={this.handleCardPayPress}
          {...testID('cardFormButton')}
        />
        <View style={styles.token} {...testID('cardFormToken')}>
          {token && (
            <Text style={styles.instruction}>Token: {token.tokenId}</Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  token: {
    height: 20,
  },
  backToApp: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
    paddingBottom: 5,
    backgroundColor: 'royalblue',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 50,
    marginVertical: 20,
    padding: 15,
  },
});
