import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../Typography/typography';
import PasswordBox from './PasswordBox';
import BackButton from '../BackButton/BackButton';
import PrimaryButton from '../Layouts/PrimaryButton/PrimaryButton';

const ResetPassword = ({navigation}) => {
  return (
    <View style={globalStyle.wrapper}>
      <BackButton to="LoginPage" navigation={navigation} />
      <Text style={globalStyle.bigBold}>Reset your password</Text>
      <Text style={globalStyle.small}>
        Select contact details should we choose
      </Text>
      <Text style={globalStyle.small}>use to reset your password</Text>
      <PasswordBox placeholder="New Password" />
      <PasswordBox placeholder="Confirm Password" />
      <PrimaryButton
        text="Next"
        pressed={() => navigation.navigate('PasswordResetSuccess')}
      />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
