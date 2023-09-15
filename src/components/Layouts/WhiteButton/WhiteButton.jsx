import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {LinearTextGradient} from 'react-native-text-gradient';
import {COLORS} from '../../../Colors/Colors';

const WhiteButton = ({text, pressed, width = 80}) => {
  return (
    <View style={styles.wrapper}>
      <Pressable style={[styles.btn, {width}]} onPress={pressed}>
        <LinearTextGradient
          locations={[0, 1]}
          colors={[COLORS.secondary, COLORS.primary]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={styles.txt}>
          <Text>{text}</Text>
        </LinearTextGradient>
      </Pressable>
    </View>
  );
};

export default WhiteButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    elevation: 10,
  },
  gradient: {
    borderRadius: 15,
  },
  txt: {
    fontFamily: 'BentonSans Book',
    fontSize: 12,
    fontWeight: '800',
  },
});
