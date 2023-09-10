import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {LOGO} from '../../images/images';
import {LinearTextGradient} from 'react-native-text-gradient';

const LogoName = () => {
  return (
    <View style={styles.logoWrapper}>
      <Image style={styles.logoImg} source={LOGO.logo} />
      <LinearTextGradient
        style={styles.bigText}
        locations={[0, 1]}
        colors={['#53E88B', '#15BE77']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}>
        <Text style={styles.appNameText}>KhajaGhar</Text>
      </LinearTextGradient>
      <Text style={styles.quote}>Deliver Favorite Food</Text>
    </View>
  );
};

export default LogoName;

const styles = StyleSheet.create({
  logoImg: {
    alignItems: 'flex-start',
  },
  logoWrapper: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginTop: 40,
  },
  appNameText: {
    fontFamily: 'Viga-Regular',
    fontSize: 40,
    fontWeight: '400',
    opacity: 1,
    color: '#53E88B',
  },
  quote: {
    color: '#09051C',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
