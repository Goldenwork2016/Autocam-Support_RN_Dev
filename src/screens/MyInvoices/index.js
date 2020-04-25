import React, {useContext, useState} from 'react';
import {NavigationContext} from 'react-navigation';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Icon, CheckBox} from 'react-native-elements';
import {useHeaderHeight} from 'react-navigation-stack';
import colors from '~/styles';
import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';
import Button from '~/components/Button';

import myInvoices from '~/config/myInvoices';

const MyInvoices = () => {
  const navigation = useContext(NavigationContext);
  const [checked, setChecked] = useState(false);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View style={{marginTop: useHeaderHeight() + useHeaderHeight() / 4}}>
        <View
          style={{
            borderTopWidth: 0.8,
            marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
          }}
        />
        {myInvoices.map((invoice, index) => (
          <ScrollView style={styles.scrollview}>
            <View style={styles.list}>
              <CheckBox
                center
                title={<Text style={styles.invoice}>Inv 10{index++}</Text>}
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
                  paddingLeft: '2%',
                }}>
                {invoice.name}
              </Text>
            </View>
          </ScrollView>
        ))}
      </View>
      <View style={styles.button}>
        <Button
          title="Email Invoices"
          onPress={() => navigation.navigate('Billing')}
        />
      </View>
    </ImageBackground>
  );
};

export default MyInvoices;
