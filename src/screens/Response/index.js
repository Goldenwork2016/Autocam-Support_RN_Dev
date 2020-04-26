import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Button, Overlay, Input} from 'react-native-elements';
import {useHeaderHeight} from 'react-navigation-stack';

import colors from '~/styles';
import styles from './styles';
import bg from '~/assets/background-white/whiteBg.png';

import Chat from '~/components/Chat';

import chat from '~/config/response';

const Response = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

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
            onPress={() => setIsVisible(!isVisible)}
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
      <Overlay
        isVisible={isVisible}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor={colors.snowWhite}
        width="90%"
        height="auto"
        onBackdropPress={() => setIsVisible(!isVisible)}>
        <View style={styles.card}>
          <Input
            inputContainerStyle={styles.input}
            inputStyle={{
              fontSize: 18,
              color: colors.lightGrey,
              textAlignVertical: 'top',
            }}
            placeholder="Type your message here"
            placeholderTextColor={colors.opacityWhite}
            multiline={true}
            numberOfLines={3}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <View
            style={{
              marginHorizontal: (Dimensions.get('window').width * 0.2) / 4,
              paddingVertical: '2%',
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <Button
              title="Reply"
              titleStyle={{color: colors.lightGrey}}
              buttonStyle={styles.button}
              onPress={() => setIsVisible(!isVisible)}
            />
          </View>
        </View>
      </Overlay>
    </ImageBackground>
  );
};

export default Response;
