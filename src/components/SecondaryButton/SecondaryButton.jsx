import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '../../Colors/Colors';

const SecondaryButton = ({text, pressed, width = 157}) => {
  return (
    <Pressable onPress={() => pressed()} style={[styles.btn, {width}]}>
      <Text style={styles.btnTxt}>{text}</Text>
    </Pressable>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.translucentSecondary,
    alignSelf: 'center',
    margin: 5,
    // color: 'rgba(218, 99, 23, 1)',
  },
  btnTxt: {
    color: 'rgba(218, 99, 23, 1)',
    fontWeight: '800',
    fontSize: 15,
    fontFamily: 'BentonSans Medium',
    letterSpacing: 0.429,
    textAlign: 'center',
  },
});
