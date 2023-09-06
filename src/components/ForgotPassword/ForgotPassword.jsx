import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ForgotPassword = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.bigBold}>ForgotPassword?</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginTop: 40,
  },
});
