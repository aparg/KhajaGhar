import React from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {COLORS} from '../../Colors/Colors';

function Entry() {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../../assets/images/Pattern.png')}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
          style={styles.linearGradient}></LinearGradient>
      </ImageBackground>
      <View style={styles.logoWrappper}>
        <Image
          style={styles.logoImg}
          source={require('../../../assets/images/Logo/Logo.png')}
        />
        <Text style={styles.appNameText}>FoodNinja</Text>
        <Text style={styles.quote}>Deliver Favorite Food</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    color: '#fff',
    backgroundColor: '#fff',
    // justifyContent: 'flex-start',
  },
  backgroundImg: {
    height: '50%',
    flex: 1,
    zIndex: 0,
  },
  logoWrappper: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    height: '50%',
  },
  appNameText: {
    fontFamily: 'Viga-Regular',
    fontSize: 40,
    fontWeight: '400',
    opacity: 1,
    color: COLORS.secondary,
  },
  quote: {
    color: '#09051C',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default Entry;
