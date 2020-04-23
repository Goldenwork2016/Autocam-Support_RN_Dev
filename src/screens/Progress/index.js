import React, {useContext} from 'react';
import {NavigationContext} from 'react-navigation';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
import colors from '~/styles';
import bg from '~/assets/background-white/whiteBg.png';
import styles from './styles';

const Progress = () => {
  const navigation = useContext(NavigationContext);
  const name = navigation.getParam('name');
  const repairCost = navigation.getParam('repairCost');
  const avatar = navigation.getParam('avatar');

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View style={{marginTop: useHeaderHeight() + useHeaderHeight() / 8}}>
        <View
          style={{
            borderTopWidth: 0.8,
            marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
          }}
        />
        <View>
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
                  Repair cost:{repairCost}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.steps}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  borderLeftWidth: 10,
                  borderColor: '#E18700',
                }}
              />
              <View style={{justifyContent: 'space-between'}}>
                <Text style={styles.stepText}>Device is Recieved</Text>
                <Text style={styles.stepText}>Device is Fixed</Text>
                <Text style={styles.stepText}>Device is Generated</Text>
                <Text style={styles.stepText}>Device is Shipping</Text>
                <Text style={styles.stepText}>Device is Received Back</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Progress;
