import React, {useContext, useEffect, useState} from 'react';
import {NavigationContext} from 'react-navigation';
import {
  ImageBackground,
  StatusBar,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';

import styles from './styles';
import Button from '~/components/Button';
import bg from '~/assets/background-white/whiteBg.png';

import Loader from '~/components/Loader';

import items from '~/config/products';
import itemCategories from '~/config/productCategories';
import ListByCategory from '~/components/ListProducts/ListByCategory';

const Products = () => {
  const navigation = useContext(NavigationContext);

  const [loading, setLoading] = useState(false);

  const [reorderedItems, setReorderedItems] = useState([]);

  const getCategoryProducts = async (categories, products) => {
    const reorderedArray = [];
    for (let index = 0; index < categories.length; index++) {
      const category = categories[index];
      const reorderedItem = {};
      reorderedItem.category = category;
      reorderedItem.products = products.filter(
        (item) => item.category === category,
      );
      reorderedArray.push(reorderedItem);
    }
    return reorderedArray;
  };

  useEffect(() => {
    setLoading(true);
    getCategoryProducts(itemCategories, items).then((result) => {
      console.log(JSON.stringify({result}));
      setReorderedItems(result);
      setLoading(false);
    });
  }, []);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View
        style={{
          flex: 1,
          marginTop: useHeaderHeight(),
        }}>
        <ScrollView
          style={{
            height: '70%',
          }}>
          {loading ? (
            <Loader />
          ) : (
            reorderedItems.map(({category, products}, key) => (
              <ListByCategory
                category={category}
                products={products}
                key={key}
                customStyle={
                  key !== 0
                    ? {
                        paddingTop:
                          Dimensions.get('window').height < 700 ? '5%' : '7%',
                      }
                    : {}
                }
              />
            ))
          )}
        </ScrollView>
      </View>

      <View style={styles.button}>
        {!loading && (
          <View style={{marginVertical: '15%'}}>
            <Button
              title="Calculate Shipping"
              onPress={() => navigation.navigate('MyOrder')}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default Products;
