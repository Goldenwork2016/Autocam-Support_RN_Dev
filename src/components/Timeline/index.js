import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import colors from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  list: {
    flex: 1,
    marginTop: 20,
    height: 50,
  },
});

const TimelineProgress = ({sliderHeight}) => {
  const [data] = useState([
    {
      title: 'Device is Recieved',
      lineColor: '#E18700',
    },
    {
      title: 'Device is Fixed',
      lineColor: '#E18700',
    },
    {
      title: 'Invoice is Generated',
      lineColor: '#C0C0C0',
      circleColor: '#C0C0C0',
    },
    {title: 'Device is Shipping', lineColor: '#C0C0C0', circleColor: '#C0C0C0'},
    {
      title: 'Device is Recieved Back',
      lineColor: '#C0C0C0',
      circleColor: '#C0C0C0',
    },
  ]);

  return (
    <View style={styles.container}>
      <Timeline
        circleSize={40}
        lineWidth={10}
        circleColor="#E18700"
        listViewStyle={{color: '#444'}}
        rowContainerStyle={{height: sliderHeight / 5}}
        titleStyle={{
          color: colors.lightGrey,
          fontSize: 17,
          fontWeight: 'normal',
        }}
        style={styles.list}
        data={data}
      />
    </View>
  );
};

export default TimelineProgress;
