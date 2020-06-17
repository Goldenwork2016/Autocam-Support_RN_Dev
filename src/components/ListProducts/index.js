import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {connect} from 'react-redux';
import plus from '~/assets/plus-minus/plus.png';
import minus from '~/assets/plus-minus/minus.png';
import colors from '~/styles';
import styles from './styles';

const ListProducts = ({
  RMA,
  amount,
  avatar,
  name,
  price,
  repairCost,
  productID,
  updateOrderedProducts,
}) => {
  console.log({
    units: amount,
    price,
    name,
  });
  const navigation = useContext(NavigationContext);

  return !RMA ? (
    <View style={styles.containerView}>
      <View style={styles.list}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 2}}>
          <View style={{flex: 1}}>
            <View style={styles.productBg}>
              <Image
                source={{
                  uri: avatar,
                }}
                style={styles.productImage}
              />
            </View>
          </View>
          <View style={{paddingLeft: '5%', flex: 1}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: colors.lightGrey,
              }}>
              {name}
            </Text>
            <Text
              style={{
                color: colors.lightGrey,
              }}>
              ${price} per unit
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            flex: 0.8,
          }}>
          <Text style={{fontSize: 10}}> Number of Units</Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                if (amount === 0) {
                  updateOrderedProducts({}, productID, 'REMOVE');
                  return;
                }
                const productObj = {
                  units: amount - 1,
                  price,
                  name,
                };
                updateOrderedProducts(productObj, productID, 'ADD');
              }}>
              <Image source={minus} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.amount}>{amount}</Text>
            <TouchableOpacity
              onPress={() => {
                const productObj = {
                  units: amount + 1,
                  price,
                  name,
                };

                console.log({amount, productObj, updateOrderedProducts});
                updateOrderedProducts(productObj, productID, 'ADD');
              }}>
              <Image source={plus} style={styles.image} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  ) : (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Progress', {
          name,
          repairCost,
          avatar,
        })
      }>
      <View style={styles.list}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.productBg}>
            <Image source={avatar} style={styles.productImage} />
          </View>
          <View style={{paddingLeft: '5%'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: colors.lightGrey,
              }}>
              {name}
            </Text>

            <Text
              style={{
                color: colors.lightGrey,
                fontSize: 13,
              }}>
              Click for progress
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function mapStateToProps(state) {
  return {
    orderedProducts: state.orderedProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateOrderedProducts: (product, productID, type) =>
      dispatch({type, product, productID}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
