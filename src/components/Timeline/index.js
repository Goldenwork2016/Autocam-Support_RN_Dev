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
    marginTop: 0,
  },
});

const TimelineProgress = ({sliderHeight}) => {
  const [data] = useState([
    {
      lineColor: '#E18700',
      circleColor: 'transparent',
    },
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
        rowContainerStyle={{height: sliderHeight / 6}}
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
