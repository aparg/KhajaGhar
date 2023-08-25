import {StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

const withBackground = OriginalComponent => {
  function NewComponent() {
    return (
      <ImageBackground
        source={require('../../../assets/images/Pattern.png')}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <LinearGradient
          colors={[
            'rgba(255,255,255,0)',
            'rgba(255,255,255,1)',
            'rgba(255,255,255,1)',
          ]}
          style={styles.linearGradient}>
          <OriginalComponent />
        </LinearGradient>
      </ImageBackground>
    );
  }
  return NewComponent;
};

export default withBackground;

const styles = StyleSheet.create({
  backgroundImg: {
    height: '50%',
    flex: 1,
    zIndex: 0,
  },
  linearGradient: {
    height: '100%',
    borderRadius: 20,
  },
});
