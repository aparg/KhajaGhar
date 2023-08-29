import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const LogoName = () => {
  return (
    <View style={styles.logoWrapper}>
      <Image
        style={styles.logoImg}
        source={require('../../../assets/images/Logo/Logo.png')}
      />
      <Text style={styles.appNameText}>FoodNinja</Text>
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
    marginTop: 40,
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
