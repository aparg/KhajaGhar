import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputTextBox from '../InputTextBox/InputTextBox';
import BackButton from '../BackButton/BackButton';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
const BioFillup = ({navigation}) => {
  const {firstName, setFirstName} = useState('');
  const {lastName, setLastName} = useState('');
  const {mobileName, setMobileName} = useState('');
  return (
    <>
      <View style={styles.wrapper}>
        <BackButton to="SignUp" navigation={navigation} />
        <View style={styles.mainContent}>
          <Text style={styles.bigBold}>Fill in your bio to get started</Text>
          <Text style={styles.small}>
            This data will be displayed in your account
          </Text>
          <Text style={styles.small}>profile for security</Text>
        </View>
      </View>
      <View style={styles.form}>
        <InputTextBox
          placeholder="First Name"
          value={firstName}
          onChange={setFirstName}
        />
        <InputTextBox
          placeholder="Last Name"
          value={lastName}
          onChange={setLastName}
        />
        <InputTextBox
          placeholder="Mobile Name"
          value={mobileName}
          onChange={setMobileName}
        />
      </View>
      <PrimaryButton
        text="Next"
        pressed={() => navigation.navigate('PaymentMethod')}
      />
      {console.log(firstName)}
    </>
  );
};

export default BioFillup;

const styles = StyleSheet.create({
  bigBold: {
    fontFamily: 'BentonSans Bold',
    color: '#09051C',
    fontWeight: '800',
    fontSize: 35,
    marginBottom: 10,
  },
  wrapper: {
    marginHorizontal: 40,
    marginTop: 40,
  },
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
