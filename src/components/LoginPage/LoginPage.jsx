import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import withBackground from '../hocs/withBackground';
import {TextInput} from 'react-native';

const LoginPage = () => {
  const {email, setEmail} = useState('');
  const {pswd, setPswd} = useState('');
  return (
    <>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoImg}
          source={require('../../../assets/images/Logo/Logo.png')}
        />
        <Text style={styles.appNameText}>FoodNinja</Text>
        <Text style={styles.quote}>Deliver Favorite Food</Text>
      </View>

      <Text style={styles.title}>Login to Your Account</Text>
      <View style={styles.loginForm}>
        <TextInput
          value={email}
          onChange={setEmail}
          style={styles.textInput}
          placeholder="Email"></TextInput>
        <TextInput
          value={pswd}
          onChange={setPswd}
          style={styles.textInput}
          placeholder="Password"></TextInput>
      </View>
      <Text style={styles.boldSmall}>Or Continue With</Text>
      <View style={styles.socialLinkContainer}>
        <Pressable
          onClick={() => {
            /* T be implemented */
          }}
          style={styles.socialLink}>
          <Image
            source={require('../../../assets/images/social/facebook.png')}></Image>
        </Pressable>
        <Pressable
          onClick={() => {
            /* T be implemented */
          }}
          style={styles.socialLink}>
          <Image
            source={require('../../../assets/images/social/facebook.png')}></Image>
        </Pressable>
      </View>
    </>
  );
};

export default withBackground(LoginPage);

const styles = StyleSheet.create({
  logoImg: {
    alignItems: 'flex-start',
  },
  logoWrapper: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  appNameText: {
    fontFamily: 'Viga-Regular',
    fontSize: 40,
    fontWeight: '400',
    opacity: 1,
    color: '#53E88B',
  },
  quote: {
    color: '#09051C',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1,
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'Bentonsans Bold',
    fontSize: 20,
    fontWeight: '800',
    color: '#09051C',
    marginTop: 50,
    marginBottom: 40,
  },
  textInput: {
    color: '#000',
    width: '80%',
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 15,
    margin: 5,
    height: 57,
    paddingHorizontal: 30,
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
    marginTop: 20,
    marginBottom: 40,
  },
  socialLinkContainer: {
    flex: 1,
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
    padding: 20,
  },
});
