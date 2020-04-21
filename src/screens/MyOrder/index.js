import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationContext} from 'react-navigation';
import colors from '~/styles';
import Title from '~/components/Title';
import styles from './styles';
import Button from '~/components/Button';
import bg from '~/assets/background-white/whiteBg.png';

const MyOrder = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />

      <Title title="My Order" Icon="goBack" small />

      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.topContainer}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Subtotal</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Delivery Cost
            </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', paddingHorizontal: 5}}>1x</Text>
              <Text style={{paddingHorizontal: 5, letterSpacing: 0}}>
                $279.00
              </Text>
              <Icon
                name="delete"
                color={colors.grey}
                size={16}
                style={{paddingHorizontal: 5}}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', paddingHorizontal: 5}}>2x</Text>
              <Text style={{paddingHorizontal: 5, letterSpacing: 0}}>
                $240.00
              </Text>
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
            <View>
              <Text>Subtotal</Text>
              <Text>Delivery Costa</Text>
            </View>
            <View>
              <Text>$ 5759.00</Text>
              <Text style={{textAlign: 'right'}}>Free</Text>
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
