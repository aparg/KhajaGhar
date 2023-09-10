import {StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {BACKGROUND} from '../../images/images';

const withBackground = OriginalComponent => {
  function NewComponent(props) {
    return (
      <ImageBackground
        source={BACKGROUND.background}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <LinearGradient
          colors={[
            'rgba(255,255,255,0)',
            'rgba(255,255,255,1)',
            'rgba(255,255,255,1)',
          ]}
          style={styles.linearGradient}>
          <OriginalComponent {...props} />
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
    zIndex: -1,
  },
  linearGradient: {
    height: '100%',
    borderRadius: 20,
  },
});
