import {StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../../images/images';
const BackButton = ({to, navigation}) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(to);
      }}>
      <Image source={ICONS.back} />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
