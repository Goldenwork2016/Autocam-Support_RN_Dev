import React, {useContext, useState} from 'react';
import {NavigationContext} from 'react-navigation';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {Slider} from 'react-native-elements';
import {useHeaderHeight} from 'react-navigation-stack';
import colors from '~/styles';
import bg from '~/assets/background-white/whiteBg.png';
import styles from './styles';

const Progress = () => {
  const navigation = useContext(NavigationContext);
  const name = navigation.getParam('name');
  const repairCost = navigation.getParam('repairCost');
  const avatar = navigation.getParam('avatar');
  const [progress, setProgress] = useState(Math.floor(Math.random() * 6));
  const [sliderHeight, setSliderHeight] = useState(0);

  const heightOfView = (layout) => {
    const {height} = layout;
    return setSliderHeight(height);
  };
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
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <View
                style={{
                  marginRight: '10%',
                  alignSelf: 'stretch',
                }}
                onLayout={(event) => {
                  heightOfView(event.nativeEvent.layout);
                }}>
                <Slider
                  disabled
                  minimumTrackTintColor="#E18700"
                  maximumTrackTintColor="#DBDBDB"
                  thumbTintColor="#E18700"
                  trackStyle={{
                    width: (Dimensions.get('window').width * 0.2) / 4,
                    borderRadius: 70,
                  }}
                  thumbStyle={{
                    width: Dimensions.get('window').width * 0.1,
                    height: Dimensions.get('window').width * 0.1,
                    borderRadius: 100,
                  }}
                  height={sliderHeight}
                  orientation="vertical"
                  value={progress}
                  minimumValue={1}
                  maximumValue={5}
                  onValueChange={(progress) => setProgress(progress)}
                />
              </View>
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
