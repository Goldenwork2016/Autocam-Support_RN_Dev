import React, {useContext} from 'react';
import {NavigationContext} from 'react-navigation';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';

import colors from '~/styles';
import styles from './styles';
import Button from '~/components/Button';
import bg from '~/assets/background-white/whiteBg.png';

import ListProducts from '~/components/ListProducts';

import items from '~/config/products';

const Products = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View style={{marginTop: useHeaderHeight() + useHeaderHeight() / 8}}>
        <Text
          style={{paddingLeft: '8%', fontSize: 20, color: colors.lightGrey}}>
          Products
        </Text>
        <View
          style={{
            borderTopWidth: 0.8,
            marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
          }}
        />
        <ScrollView style={{height: '80%'}}>
          {items.map((item, key) => (
            <ListProducts
              key={key}
              amount={item.amount}
              avatar={item.avatar}
              name={item.name}
              subtitle={item.subtitle}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.button}>
        <Button
          title="Calculate Shipping"
          onPress={() => navigation.navigate('MyOrder')}
        />
      </View>
    </ImageBackground>
  );
};

export default Products;
