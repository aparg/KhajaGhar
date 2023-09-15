import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Congrats from '../Layouts/Congrats/Congrats';
import withBackground from '../hocs/withBackground';
import PrimaryButton from '../Layouts/PrimaryButton/PrimaryButton';

const PasswordResetSuccess = ({navigation}) => {
  return (
    <>
      <Congrats text="Password Reset Successful" />
      <PrimaryButton
        text="Back"
        pressed={() => navigation.navigate('LoginPage')}
      />
    </>
  );
};

// export default withBackground(PasswordResetSuccess);
export default PasswordResetSuccess;

const styles = StyleSheet.create({});
