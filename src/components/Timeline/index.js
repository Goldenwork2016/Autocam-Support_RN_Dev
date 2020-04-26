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
    paddingTop: '5%',
    borderRadius: 5,
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
        renderFullLine={true}
        circleColor="#E18700"
        circleStyle={{alignSelf: 'center'}}
        rowContainerStyle={{height: sliderHeight / 6}}
        titleStyle={{
          color: colors.lightGrey,
          fontSize: 17,
          fontWeight: 'normal',
          paddingTop: '5%',
        }}
        style={styles.list}
        data={data}
      />
    </View>
  );
};

export default TimelineProgress;
