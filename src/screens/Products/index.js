import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View, Text, Image} from 'react-native';
import {ListItem} from 'react-native-elements';

import {NavigationContext} from 'react-navigation';
import plus from '~/assets/plus-minus/plus.png';
import minus from '~/assets/plus-minus/minus.png';
import Title from '~/components/Title';
import colors from '~/styles';
import styles from './styles';
import bg from '~/assets/background/bg.png';

const list = [
  {
    name: 'AC 300SE',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '$279.00 per unit',
    amount: 0,
  },
  {
    name: 'KMZ-4HD',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '$120.00 per unit',
    amount: 0,
  },
  {
    name: 'SF-10P',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '$99.00 per unit',
    amount: 0,
  },
  {
    name: 'DSM-D10',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '$45.00 per unit',
    amount: 0,
  },
  // more items
];

const RightField = ({amount}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Image source={minus} color={colors.grey} />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          paddingHorizontal: 5,
          paddingVertical: 0,
        }}>
        {amount}
      </Text>

      <Image source={plus} color={colors.grey} />
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
        <Text style={{fontSize: 16, paddingLeft: 5}}>Products</Text>
        {list.map((l, i) => (
          <ListItem
            containerStyle={styles.list}
            key={i}
            leftAvatar={{source: {uri: l.avatar_url}}}
            title={l.name}
            subtitle={l.subtitle}
            topDivider
            bottomDivider
            rightElement={<RightField amount={l.amount} />}
          />
        ))}
      </View>

      {/*<View style={styles.button}>
        <Button title="Save" onPress={() => navigation.navigate('Login')} />
      </View>*/}
    </ImageBackground>
  );
};

export default Products;
