import React from 'react';
import { Text, View } from 'react-native';

export function ShowingTimes(props) {
  return (
    <View>
      {props.showings.map(showing => <Text key={showing.id}>{showing.showing_time}</Text> )}
    </View>
  )
}