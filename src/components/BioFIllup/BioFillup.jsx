import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import BackButton from '../BackButton/BackButton';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import globalStyle from '../../Typography/typography';
import inputBoxStyle from '../../Typography/inputBox';
import {useDispatch} from 'react-redux';
import {saveProfileData} from '../../../slices/slice';

const BioFillup = ({navigation}) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  return (
    <View style={globalStyle.wrapper}>
      <View>
        <BackButton to="SignUp" navigation={navigation} />
        <View style={styles.mainContent}>
          <Text style={globalStyle.bigBold}>
            Fill in your bio to get started
          </Text>
          <Text style={globalStyle.small}>
            This data will be displayed in your account
          </Text>
          <Text style={styles.small}>profile for security</Text>
        </View>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={inputBoxStyle.inputBox}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={inputBoxStyle.inputBox}
        />
        <TextInput
          placeholder="Mobile Name"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          style={inputBoxStyle.inputBox}
        />
      </View>
      <PrimaryButton
        text="Next"
        pressed={() => {
          dispatch(
            saveProfileData({
              firstName,
              lastName,
              mobileNumber: '+977 ' + mobileNumber,
            }),
          );
          navigation.navigate('PaymentMethod');
        }}
      />
    </View>
  );
};

export default BioFillup;

const styles = StyleSheet.create({
  mainContent: {
    marginTop: 30,
  },
  small: {
    fontFamily: 'BentonSans Bold',
    color: '#09051C',
    fontSize: 15,
    marginTop: 5,
  },
  form: {
    height: '55%',
  },
});
