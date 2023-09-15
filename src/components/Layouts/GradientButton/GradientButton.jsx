import {StyleSheet, Text, View, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {COLORS} from '../../../Colors/Colors';

const PrimaryButton = ({text, pressed}) => {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.gradient}>
        <Pressable style={styles.btn} onPress={pressed}>
          <Text style={styles.txt}>{text}</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    // marginTop: 700,
    paddingTop: 0,
    borderWidth: 2,
  },
  btn: {
    borderRadius: 15,
    width: 157,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    borderRadius: 15,
  },
  txt: {
    color: '#fff',
    fontFamily: 'BentonSans Book',
    fontSize: 16,
    fontWeight: '800',
  },
});
