import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackButton from '../BackButton/BackButton';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const PaymentMethod = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <BackButton to="BioFillup" navigation={navigation} />
      <View style={styles.mainContent}>
        <Text style={styles.bigBold}>Fill in your bio to get started</Text>
        <Text style={styles.small}>
          This data will be displayed in your account
        </Text>
        <Text style={styles.small}>profile for security</Text>
        <View>
          <Pressable style={styles.paymentOptionBox}>
            <Image
              source={require('../../../assets/images/payment/paypal.png')}
            />
          </Pressable>
          <Pressable style={styles.paymentOptionBox}>
            <Image
              source={require('../../../assets/images/payment/visa.png')}
            />
          </Pressable>
          <Pressable style={styles.paymentOptionBox}>
            <Image
              source={require('../../../assets/images/payment/payoneer.png')}
            />
          </Pressable>
        </View>
      </View>
      <PrimaryButton
        text="Next"
        pressed={() => navigation.navigate('ProfilePhotoUpload')}
      />
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 40,
    marginTop: 40,
  },
  bigBold: {
    fontFamily: 'BentonSans Bold',
    color: '#09051C',
    fontWeight: '800',
    fontSize: 35,
    marginBottom: 10,
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
  paymentOptionBox: {
    height: 60,
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: '#5A6CEA',
    elevation: 8,
  },
});
