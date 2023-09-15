import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import shadow from '../../../Typography/shadow';

const HorizontalBox = ({children}) => {
  return <View style={[styles.itemBuyWrapper, shadow.blue]}>{children}</View>;
};

export default HorizontalBox;

const styles = StyleSheet.create({
  itemBuyWrapper: {
    backgroundColor: 'white',
    marginVertical: 10,
    flexDirection: 'row',
    width: '98%',
    height: 100,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
