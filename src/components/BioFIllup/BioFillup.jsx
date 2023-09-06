import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputTextBox from '../InputTextBox/InputTextBox';
import BackButton from '../BackButton/BackButton';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import globalStyle from '../../Typography/typography';

const BioFillup = ({navigation}) => {
  const {firstName, setFirstName} = useState('');
  const {lastName, setLastName} = useState('');
  const {mobileName, setMobileName} = useState('');
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
