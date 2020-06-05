import React, {useState, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContext} from 'react-navigation';
import plus from '~/assets/plus-minus/plus.png';
import minus from '~/assets/plus-minus/minus.png';
import colors from '~/styles';
import styles from './styles';
import ListProducts from './index';

const ListByCategory = ({category, products, customStyle}) => {
  return (
    <View style={[customStyle]}>
      <Text style={{paddingLeft: '2%', fontSize: 20, color: colors.lightGrey}}>
        {category.toUpperCase()}
      </Text>
      {products.map((item, key) => (
        <ListProducts
          key={key}
          amount={item.amount}
          avatar={item.avatar}
          name={item.name}
          subtitle={item.subtitle}
        />
      ))}
    </View>
  );
};

export default ListByCategory;
