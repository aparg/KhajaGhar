import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import PrimaryButton from '../Layouts/PrimaryButton/PrimaryButton';
import {TextInput} from 'react-native-gesture-handler';
import BackButton from '../BackButton/BackButton';
import globalStyle from '../../Typography/typography';

const CodeVerification = ({navigation}) => {
  const mobileNumber = useSelector(state => state.profileData.mobileNumber);
  const [time, setTime] = useState(5);
  useEffect(() => {
    const timerId = setInterval(function () {
      setTime(time => {
        if (time <= 0) {
          clearInterval(timerId);
          return time;
        }
        return time - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <View style={globalStyle.wrapper}>
      <BackButton to="ProfilePhotoUpload" navigation={navigation} />
      <Text style={globalStyle.bigBold}>Enter 4-digit Verification code</Text>
      <Text style={globalStyle.small}>
        Code sent to {mobileNumber?.slice(0, 9)}******. The code will
      </Text>
      <Text style={globalStyle.small}>
        expire in {Math.floor(time / 60)}:{time % 60}
      </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.otpBox}
        maxLength={4}
        onSubmitEditing={() => navigation.navigate('ForgotPassword')}
      />
      <PrimaryButton
        text="Next"
        pressed={() => navigation.navigate('ForgotPassword')}
      />
    </View>
  );
};

export default CodeVerification;

const styles = StyleSheet.create({
  otpBox: {
    paddingHorizontal: 30,
    height: 100,
    fontWeight: '800',
    letterSpacing: 50,
    textAlign: 'center',
    // borderWidth: 1,
    borderRadius: 15,
    fontSize: 33,
    fontFamily: 'BentonSans Medium',
    borderWidth: 1,
    borderColor: '#F4F4F4',
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
  },
});
