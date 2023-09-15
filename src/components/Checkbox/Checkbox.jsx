import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {COLORS} from '../../Colors/Colors';

const Checkbox = ({text}) => {
  return (
    <View style={styles.wrapper}>
      <BouncyCheckbox
        size={20}
        fillColor={COLORS.primary}
        unfillColor="#FFFFFF"
        text={text}
        textStyle={{fontFamily: 'BentonSans Book', fontSize: 12}}
      />
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  wrapper: {
    margin: 3,
  },
});
