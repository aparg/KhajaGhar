import {Image, StyleSheet, Text, View, Pressable, Linking} from 'react-native';
import React, {useState} from 'react';
import withBackground from '../hocs/withBackground';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import InputTextBox from '../InputTextBox/InputTextBox';
import LogoName from '../LogoName/LogoName';
import globalStyle from '../../Typography/typography';
import {SOCIALS} from '../../images/images';

const LoginPage = ({navigation}) => {
  const {email, setEmail} = useState('');
  const {pswd, setPswd} = useState('');
  return (
    <View style={globalStyle.wrapper}>
      <LogoName />
      <Text style={styles.title}>Login to Your Account</Text>
      <View style={styles.loginForm}>
        <InputTextBox
          value={email}
          onChange={setEmail}
          placeholder="Email"></InputTextBox>
        <InputTextBox
          value={pswd}
          onChange={setPswd}
          placeholder="Password"></InputTextBox>
      </View>
      <Text style={styles.boldSmall}>Or Continue With</Text>
      <View style={styles.socialLinkContainer}>
        <Pressable
          onClick={() => {
            /* To be implemented */
          }}
          style={styles.socialLink}>
          <View style={styles.socialLinkWrapper}>
            <FontAwesome5 name={'facebook'} color="#4267B2" size={30} brand />
            <Text style={styles.socialTxt}>Facebook</Text>
          </View>
        </Pressable>
        <Pressable
          onClick={() => {
            /* To be implemented */
          }}
          style={styles.socialLink}>
          <View style={styles.socialLinkWrapper}>
            <Image source={SOCIALS.google} style={styles.googleIcon}></Image>
            <Text style={styles.socialTxt}>Google</Text>
          </View>
        </Pressable>
      </View>
      <Text
        style={styles.forgotPswd}
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}>
        Forgot your password?
      </Text>
      <PrimaryButton
        text="Login"
        pressed={() => {
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
};

export default withBackground(LoginPage);

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontFamily: 'Bentonsans Bold',
    fontSize: 20,
    fontWeight: '800',
    color: '#09051C',
    marginTop: 50,
    marginBottom: 40,
  },
  loginForm: {
    background: '#fff',
    alignItems: 'center',
  },
  txt: {
    alignSelf: 'center',
    fontFamily: 'Bentonsans Bold',
    fontSize: 20,
    fontWeight: '800',
    color: '#09051C',
    marginTop: 50,
    marginBottom: 40,
  },
  boldSmall: {
    alignSelf: 'center',
    fontFamily: 'Bentonsans Bold',
    fontSize: 15,
    fontWeight: '800',
    color: '#09051C',
    marginTop: 25,
    marginBottom: 40,
  },
  socialLinkContainer: {
    flexDirection: 'row',
  },
  socialLink: {
    borderColor: '#F4F4F4',
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    height: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
  socialLinkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialTxt: {
    fontWeight: '700',
    color: '#000',
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: 'BentonSans Medium',
  },
  forgotPswd: {
    alignSelf: 'center',
    color: '#53E88B',
    fontFamily: 'BentonSans Medium',
    fontWeight: '800',
    textDecorationLine: 'underline',
    marginTop: 5,
    fontSize: 12,
  },
});
