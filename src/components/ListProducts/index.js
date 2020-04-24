import React, {useState, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContext} from 'react-navigation';
import plus from '~/assets/plus-minus/plus.png';
import minus from '~/assets/plus-minus/minus.png';
import colors from '~/styles';
import styles from './styles';

const ListProducts = ({RMA, amount, avatar, name, subtitle, repairCost}) => {
  const navigation = useContext(NavigationContext);
  const [qt, setQt] = useState(0);
  return !RMA ? (
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

export default ListProducts;
