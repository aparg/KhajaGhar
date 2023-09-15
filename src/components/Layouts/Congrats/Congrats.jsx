import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LinearTextGradient} from 'react-native-text-gradient';
import {ICONS} from '../../../images/images';
import {COLORS} from '../../../Colors/Colors';

const Congrats = ({text}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={ICONS.congrats} style={styles.tickImage} />

      <LinearTextGradient
        style={styles.bigText}
        locations={[0, 1]}
        colors={[COLORS.secondary, COLORS.primary]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}>
        <Text>Congrats!</Text>
      </LinearTextGradient>
      <Text style={styles.smallBold}>{text}</Text>
    </View>
  );
};

export default Congrats;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 200,
  },

  tickImage: {
    width: 172,
    height: 162,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  smallBold: {
    fontFamily: 'BentonSans Bold',
    color: '#09051C',
    fontWeight: '800',
    fontSize: 25,
    marginBottom: 10,
    alignSelf: 'center',
    color: '#09051C',
    marginTop: 20,
  },

  bigText: {
    fontFamily: 'BentonSans Bold',
    fontSize: 30,
    fontWeight: '800',
    alignSelf: 'center',
  },
});
