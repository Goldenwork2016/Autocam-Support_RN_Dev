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
import ListByCategory from '~/components/ListProducts/ListByCategory';
import api from '~/server/index';
import {Context as UserContext} from '~/Store/index';

const Products = () => {
  //contexts
  const navigation = useContext(NavigationContext);
  const {user} = useContext(UserContext);

  //States
  const [loading, setLoading] = useState(false);
  const [reorderedItems, setReorderedItems] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState({});

  console.log(JSON.stringify({orderedProducts}));

  const getProducts = async () => {
    const headers = {
      Accept: 'application/json',
    };
    const sentData = new FormData();
    sentData.append('userID', user.userID);
    try {
      const {data: receivedData = null} = await api.post(
        'user/get_product_list',
        sentData,
        headers,
      );
      if (
        receivedData &&
        receivedData.status === 200 &&
        receivedData.productslist.length
      ) {
        const {productslist: productList} = receivedData;
        return productList;
      }
      return [];
    } catch (err) {
      throw err;
    }
  };

  const getCategories = async () => {
    const headers = {
      Accept: 'application/json',
    };
    const sentData = new FormData();
    sentData.append('userID', user.userID);
    try {
      const {data: receivedData = null} = await api.post(
        'user/get_category_list',
        sentData,
        headers,
      );
      if (
        receivedData &&
        receivedData.status === 200 &&
        receivedData.categorylist.length
      ) {
        const {categorylist: categoryList} = receivedData;
        return categoryList;
      }
      return [];
    } catch (err) {
      throw err;
    }
  };

  const getCategoryProducts = async () => {
    const reorderedArray = [];
    const products = await getProducts();
    const categories = await getCategories();
    for (let index = 0; index < categories.length; index++) {
      const {categoryID, category_name: categoryName} = categories[index];
      const reorderedItem = {};
      reorderedItem.categoryID = categoryID;
      reorderedItem.categoryName = categoryName;
      reorderedItem.products = products.filter(
        (item) => item.categoryID === categoryID,
      );
      if (!reorderedItem.products.length) {
        continue;
      }
      reorderedArray.push(reorderedItem);
    }
    return reorderedArray;
  };

  useEffect(() => {
    setLoading(true);
    getCategoryProducts().then((result) => {
      setReorderedItems(result);
      setLoading(false);
    });
  }, []);

  const updateOrderedProducts = (updatedProduct, id, type = 'add') => {
    if (updatedProduct.units === 0) {
      return;
    }
    const newOrderedProducts = JSON.parse(JSON.stringify(orderedProducts));
    newOrderedProducts[id] = type === 'add' ? updatedProduct : undefined;
    setOrderedProducts(newOrderedProducts);
  };

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
            reorderedItems.map(({categoryName, products}, key) => (
              <ListByCategory
                category={categoryName}
                products={products}
                key={key}
                updateOrderedProducts={updateOrderedProducts}
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
          <View style={{marginVertical: '5%'}}>
            <Button
              title="Calculate Shipping"
              onPress={() =>
                navigation.navigate('MyOrder', {
                  orderedProducts,
                })
              }
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default Products;
