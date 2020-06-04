import React, {useContext, useState, useLayoutEffect} from 'react';
import {NavigationContext} from 'react-navigation';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useHeaderHeight} from 'react-navigation-stack';
import colors from '~/styles';
import styles from './styles';
import api from '~/server/index';
import requestStatus from '~/dataMaps/RequestStatus';
import {Context as UserContext} from '~/Store/index';
import {timeAgo} from '~/utils';
import bg from '~/assets/background-white/whiteBg.png';
import plus from '~/assets/plus-minus/altBigPlus.png';

const Requests = () => {
  const navigation = useContext(NavigationContext);
  const {user} = useContext(UserContext);
  const [requests, setRequests] = useState([]);

  useLayoutEffect(() => {
    const getRequests = async () => {
      const headers = {
        Accept: 'application/json',
      };
      const sentData = new FormData();
      sentData.append('userID', user.userID);
      try {
        const {data: receivedData = null} = await api.post(
          'user/get_request_list',
          sentData,
          headers,
        );
        if (
          receivedData &&
          receivedData.status === 200 &&
          receivedData.requestlist.length
        ) {
          setRequests(receivedData.requestlist);
        }
      } catch (err) {
        throw err;
      }
    };

    const subscription = navigation.addListener('didFocus', () => {
      getRequests();
    });

    return () => subscription;
  });

  return (
    <ImageBackground source={bg} style={[styles.container]} resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <ScrollView
        style={[
          styles.scrollView,
          {marginTop: useHeaderHeight() + useHeaderHeight() / 4},
        ]}
        contentContainerStyle={[styles.scrollViewContainerStyle]}>
        <View style={styles.inputLine} />
        {!requests.length ? (
          <Text
            style={{
              textAlign: 'center', // <-- the magic
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 0,
              width: 400,
              backgroundColor: colors.darkWhite,
            }}>
            loading...
          </Text>
        ) : (
          requests.map((request, index) => (
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() =>
                navigation.navigate('Response', {
                  requestID: request.requestID,
                })
              }
              key={index}>
              <View>
                <View style={styles.list}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: colors.lightGrey,
                      width: '90%',
                    }}>
                    #{('000' + request.requestID).slice(-3)}.{' '}
                    {request.request_title}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: '2%',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: colors.lightGrey,
                    }}>
                    {requestStatus[request.request_status]}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: colors.lightGrey,
                    }}>
                    {timeAgo(request.update_time, 'string')} ago
                  </Text>
                </View>
              </View>
              <Icon
                name="navigate-next"
                type="material"
                color={colors.lightGrey}
                size={55}
              />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
      <View style={styles.plusButtonView}>
        <TouchableOpacity
          style={styles.plusButtonLink}
          onPress={() => navigation.navigate('CreateRequest')}>
          <Image style={styles.plusButton} source={plus} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Requests;
