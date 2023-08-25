import {StyleSheet, Text, View, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

const PrimaryButton = ({text, pressed}) => {
  return (
    <View>
      <LinearGradient
        colors={['#53E88B', '#15BE77']}
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
    fontFamily: 'BentonSans Bold',
    fontSize: 16,
    fontWeight: '800',
  },
});
