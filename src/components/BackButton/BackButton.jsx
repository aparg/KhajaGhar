import {StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';

const BackButton = ({to, navigation}) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(to);
      }}>
      <Image source={require('../../../assets/images/icons/back.png')} />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
