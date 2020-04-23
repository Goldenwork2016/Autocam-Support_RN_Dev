import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationContext} from 'react-navigation';
import colors from '~/styles';
import styles from './styles';
import Button from '~/components/Button';
import bg from '~/assets/background-white/whiteBg.png';

const MyOrder = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />

      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.title}>VT-300SE</Text>
            <Text style={styles.title}>KMC-4HD</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.amount}>1x</Text>
              <Text style={styles.price}>$279.00</Text>
              <Icon
                name="delete"
                color={colors.grey}
                size={16}
                style={{paddingHorizontal: 5}}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.amount}>2x</Text>
              <Text style={styles.price}>$240.00</Text>
              <Icon
                name="delete"
                color={colors.grey}
                size={16}
                style={{paddingHorizontal: 5}}
              />
            </View>
          </View>
        </View>

        <View style={styles.button}>
          <View style={styles.list}>
            <View style={{paddingBottom: '5%'}}>
              <Text style={styles.subtitle}>Subtotal</Text>
              <Text style={styles.subtitle}>Delivery Cost</Text>
            </View>
            <View style={{paddingBottom: '5%'}}>
              <Text style={{color: colors.lightGrey}}>$ 5759.00</Text>
              <Text style={{textAlign: 'right', color: colors.lightGrey}}>
                Free
              </Text>
            </View>
          </View>
          <Button
            title="Check Out"
            onPress={() => navigation.navigate('CheckOut')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default MyOrder;
