import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ListProducts from './index';

const ListByCategory = ({
  category,
  products,
  customStyle,
  updateOrderedProducts,
}) => {
  return (
    <View style={[customStyle]}>
      <Text style={styles.category}>{category.toUpperCase()}</Text>
      {products.map((item, key) => (
        <ListProducts
          key={key}
          amount={0}
          avatar={item.product_photo_url}
          name={item.product_name}
          price={item.product_price}
          productID={item.productID}
          updateOrderedProducts={updateOrderedProducts}
        />
      ))}
    </View>
  );
};

export default ListByCategory;
