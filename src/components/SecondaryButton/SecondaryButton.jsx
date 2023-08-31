import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const SecondaryButton = ({text, pressed}) => {
  return (
    <Pressable onPress={() => pressed()} style={styles.btn}>
      <Text style={styles.btnTxt}>{text}</Text>
    </Pressable>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 15,
    width: 157,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(249, 168, 77, 0.1)',
    alignSelf: 'center',
    // color: 'rgba(218, 99, 23, 1)',
  },
  btnTxt: {
    color: 'rgba(218, 99, 23, 1)',
    fontWeight: '600',
    fontSize: 15,
  },
});
