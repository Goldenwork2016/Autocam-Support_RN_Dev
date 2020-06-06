import React, {useContext, useState} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';
import colors from '~/styles';
import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';

const MyOrder = () => {
  const navigation = useContext(NavigationContext);

  const [orderedProducts, setOrderedProducts] = useState(
    navigation.state.params.orderedProducts,
  );
  const orderedProductsKeys = Object.keys(orderedProducts);

  console.log({orderedProductsKeys, orderedProducts});

  const updateOrderedProducts = (updatedProduct, id, type = 'add') => {
    if (updatedProduct.units === 0) {
      return;
    }
    const newOrderedProducts = JSON.parse(JSON.stringify(orderedProducts));
    if (type === 'add') {
      newOrderedProducts[id] = updatedProduct;
    }

    if (type === 'remove') {
      delete newOrderedProducts[id];
    }

    setOrderedProducts(newOrderedProducts);
  };

  let subTotal = 0;
  const productList = [];

  for (let index = 0; index < orderedProductsKeys.length; index++) {
    const key = orderedProductsKeys[index];
    const price = orderedProducts[key].units * orderedProducts[key].price;
    productList.push(
      <View
        style={styles.productListView}>
        <View style={styles.productListTitleView}>
          <Text style={styles.title}>{orderedProducts[key].name}</Text>
        </View>
        <View
          style={styles.productListNonTitleView}>
          <Text style={styles.amount}>{orderedProducts[key].units}x</Text>
          <Text style={styles.price}>${price}.00</Text>
          <View style={styles.deleteIcon}>
            <TouchableHighlight
              onPress={() => {
                updateOrderedProducts({}, key, 'remove');
              }}>
              <Icon name="delete" color={colors.grey} size={20} />
            </TouchableHighlight>
          </View>
        </View>
      </View>,
    );
    subTotal += price;
  }

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View
        style={[
          styles.secondaryContainer,
          {
            marginTop: useHeaderHeight(),
          },
        ]}>
        <ScrollView style={styles.productList}>{productList}</ScrollView>
        <View style={styles.productTotal}>
          <View style={styles.topLine} />
          <View style={styles.list}>
            <View style={{paddingBottom: '5%'}}>
              <Text style={styles.subtitle}>Subtotal</Text>
              <Text style={styles.subtitle}>Delivery Cost</Text>
            </View>
            <View style={{paddingBottom: '5%'}}>
              <Text style={{color: colors.lightGrey}}>${subTotal}.00</Text>
              <Text style={{textAlign: 'right', color: colors.lightGrey}}>
                Free
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MyOrder;
