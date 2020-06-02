import React, {useContext} from 'react';
import {ImageBackground, StatusBar, View, Text} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {useHeaderHeight} from 'react-navigation-stack';
import {Input} from 'react-native-elements';
import Button from '~/components/Button';
import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';
const CreateRequest = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View
        style={[
          styles.formView,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 4},
        ]}>
        <View style={styles.topLine} />
        <View style={[styles.card]}>
          <View style={styles.list}>
            <Text style={styles.title}>Subject</Text>
          </View>
          <View>
            <Input
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder="What do you need now?"
            />
          </View>
        </View>

        <View style={[styles.card]}>
          <View style={styles.list}>
            <Text style={styles.title}>Message</Text>
          </View>
          <View>
            <Input
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder="What can we help now?"
              multiline={true}
              numberOfLines={8}
            />
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title="Submit"
          onPress={() => navigation.navigate('SubmitRequest')}
        />
      </View>
    </ImageBackground>
  );
};

export default CreateRequest;
