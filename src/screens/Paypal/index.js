import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Alert,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';
import axios from 'axios';
import {WebView} from 'react-native-webview';
import Loading from '~/components/Loader';
import config from '~/appConfig';
import {getQueryParams} from '~/utils';

const Paypal = ({price, closeView, currency}) => {
  const [loading, setLoading] = useState(false);
  const [approvalUrl, setApprovalUrl] = useState(null);
  const [token, setToken] = useState(null);
  const [paymentId, setPaymentId] = useState(null);

  const pressCheckout = async () => {
    setLoading(true);
    try {
      let response1 = await axios({
        method: 'POST',
        url:
          'https://api.sandbox.paypal.com/v1/oauth2/token?grant_type=client_credentials',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: config.paypalAuth,
        },
      });
      console.log({
        reponse1: response1.data,
      });
      setToken(response1.data.access_token);
      const {access_token: accessToken} = response1.data;
      try {
        let response2 = await axios({
          method: 'POST',
          url: 'https://api.sandbox.paypal.com/v1/payments/payment',
          data: {
            intent: 'sale',
            payer: {
              payment_method: 'paypal',
            },
            transactions: [
              {
                amount: {
                  total: price,
                  currency: currency,
                  details: {
                    subtotal: price,
                    tax: '0',
                    shipping: '0',
                    handling_fee: '0',
                    shipping_discount: '0',
                    insurance: '0',
                  },
                },
              },
            ],
            redirect_urls: {
              return_url: 'https://example.com/return',
              cancel_url: 'https://example.com/cancel',
            },
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log({
          response2: response2.data,
        });
        const {links} = response2.data;
        let approvalLink = links.find((data) => data.rel == 'approval_url');
        console.log('approvalUrl----->', approvalLink);
        setPaymentId(paymentId);
        setApprovalUrl(approvalLink.href);
      } catch (err) {
        console.log('Second Response: Payment-Error::', err);
      }
    } catch (err) {
      console.log('First Response: Payment-Error::', {
        err,
        artefacts: config.paypalAuth,
      });
      setLoading(false);
    }
  };

  const _onNavigationStateChange = async (webViewState) => {
    setLoading(false);
    if (webViewState.url.includes('https://example.com')) {
      setApprovalUrl(null);
    }

    const paymentID = getQueryParams('paymentId', webViewState.url);
    const payerID = getQueryParams('PayerID', webViewState.url);

    if (payerID && token) {
      try {
        await axios({
          method: 'POST',
          url: `https://api.sandbox.paypal.com/v1/payments/payment/${paymentID}/execute`,
          data: {
            payer_id: payerID,
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        setToken(null);
        Alert.alert('Success', 'Payment has Been Successfully Received');
        closeView(true);
      } catch (err) {
        console.log('Execute-Payment-Error----->', {
          artefacts: {payerID, token},
        });
      }
    }
  };

  return (
    <View style={{flex: 1, paddingBottom: 0, backgroundColor: '#fff'}}>
      <StatusBar barStyle="light-content" backgroundColor="royalblue" />
      <View style={styles.header}>
        <View style={{flex: 6}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Checkout</Text>
        </View>
      </View>
      <View style={styles.backToApp}>
        <View style={{flex: 6}}>
          <TouchableHighlight
            onPress={() => {
              console.log('here');
              closeView();
            }}
            underlayColor="royalblue">
            <Text style={{fontSize: 20, textAlign: 'center', color: '#fff'}}>
              Back to the AutoCam Store
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      {loading && <Loading message="Redirecting You To Paypal...." />}
      {approvalUrl ? (
        <WebView
          source={{uri: approvalUrl}}
          style={{flex: 1}}
          onNavigationStateChange={_onNavigationStateChange}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      ) : (
        <View style={{flex: 5}}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color: '#000',
              padding: 20,
            }}>
            Total:
            <Text style={{fontWeight: 'bold'}}>
              {price} {currency}
            </Text>
          </Text>
          <Button title="Pay Now" onPress={pressCheckout} />
        </View>
      )}
    </View>
  );
};

export default Paypal;
