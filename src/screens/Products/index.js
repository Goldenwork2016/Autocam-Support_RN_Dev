import React, {useContext, useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContext} from 'react-navigation';
import plus from '~/assets/plus-minus/plus.png';
import minus from '~/assets/plus-minus/minus.png';
import Title from '~/components/Title';
import colors from '~/styles';
import styles from './styles';
import Button from '~/components/Button';
import bg from '~/assets/background-white/whiteBg.png';

import items from '~/config/products';

const ListItem = ({amount, avatar, name, subtitle}) => {
  const [qt, setQt] = useState(0);
  return (
    <View style={styles.list}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.productBg}>
          <Image source={avatar} style={styles.productImage} />
        </View>
        <View style={{paddingLeft: '5%'}}>
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
            {subtitle}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => setQt(qt - 1)}>
          <Image source={minus} style={styles.image} />
        </TouchableOpacity>
        <Text style={{color: colors.lightGrey}}>{qt ? qt : amount}</Text>
        <TouchableOpacity onPress={() => setQt(qt + 1)}>
          <Image source={plus} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Products = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <Title title="Products" Icon="menu" />
      <View style={styles.listContainer}>
        <Text
          style={{paddingLeft: '8%', fontSize: 20, color: colors.lightGrey}}>
          Products
        </Text>
        <ScrollView style={{height: '80%'}}>
          {items.map((item, key) => (
            <ListItem
              key={key}
              amount={item.amount}
              avatar={item.avatar}
              name={item.name}
              subtitle={item.subtitle}
            />
          ))}
        </ScrollView>
        <View
          style={{
            borderTopWidth: 0.8,
          }}
        />
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
