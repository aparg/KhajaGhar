import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Box = ({text}) => {
  return (
    <View style={styles.wrapper}>
      <Text>{text}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 15,
    shadowColor: '#5A6CEA',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 10,
  },
});
