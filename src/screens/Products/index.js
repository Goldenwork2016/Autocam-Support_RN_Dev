import React, {useContext, useState} from 'react';
import {ImageBackground, StatusBar, View, Text, Image} from 'react-native';
import {NavigationContext} from 'react-navigation';
import plus from '~/assets/plus-minus/plus.png';
import minus from '~/assets/plus-minus/minus.png';
import Title from '~/components/Title';
import colors from '~/styles';
import styles from './styles';
import Button from '~/components/Button';
import bg from '~/assets/background-white/whiteBg.png';
import lightswitch from '~/assets/products/lightswitch.png';
import RF610ADUSX4 from '~/assets/products/RF610ADUSX4_exterior_listingg_dsp_rt.png';
import tv from '~/assets/products/tv.png';
import vg from '~/assets/products/vg-series_0.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const items = [
  {
    name: 'AC 300SE',
    avatar: RF610ADUSX4,
    subtitle: '$279.00 per unit',
    amount: 0,
  },
  {
    name: 'KMZ-4HD',
    avatar: tv,
    subtitle: '$120.00 per unit',
    amount: 0,
  },
  {
    name: 'SF-10P',
    avatar: lightswitch,
    subtitle: '$99.00 per unit',
    amount: 0,
  },
  {
    name: 'DSM-D10',
    avatar: vg,
    subtitle: '$45.00 per unit',
    amount: 0,
  },
  // more items
];

const ListItem = ({amount, avatar, name, subtitle}) => {
  const [qt, setQt] = useState(0);
  return (
    <View style={styles.list}>
      <View style={styles.productBg}>
        <Image source={avatar} style={styles.productImage} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{subtitle}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => setQt(qt - 1)}>
          <Image source={minus} style={styles.image} />
        </TouchableOpacity>
        <Text>{qt ? qt : amount}</Text>
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
        <Text style={{paddingLeft: '10%'}}>Products</Text>
        {items.map((item, key) => (
          <ListItem
            key={key}
            amount={item.amount}
            avatar={item.avatar}
            name={item.name}
            subtitle={item.subtitle}
          />
        ))}
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
