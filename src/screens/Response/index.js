import React, {useContext} from 'react';
import {NavigationContext} from 'react-navigation';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
import {useHeaderHeight} from 'react-navigation-stack';

import colors from '~/styles';
import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';

import Chat from '~/components/Chat';

import chat from '~/config/response';

const Response = () => {
  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View style={{marginTop: useHeaderHeight() + useHeaderHeight() / 8}}>
        <View
          style={{
            borderTopWidth: 0.8,
            borderBottomWidth: 0.8,
            marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
            paddingVertical: '2%',
          }}>
          <Button
            title="Reply"
            titleStyle={{color: colors.lightGrey}}
            buttonStyle={styles.button}
          />
        </View>
        <ScrollView>
          {chat.map((chat, key) => (
            <Chat
              key={key}
              message={chat.message}
              user={chat.user}
              date={chat.date}
            />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Response;
