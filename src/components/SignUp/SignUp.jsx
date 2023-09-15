import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import withBackground from '../hocs/withBackground';
import PrimaryButton from '../Layouts/PrimaryButton/PrimaryButton';
import LogoName from '../LogoName/LogoName';
import Checkbox from '../Checkbox/Checkbox';
import {ICONS} from '../../images/images';
import {COLORS} from '../../Colors/Colors';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../../slices/slice';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [username, setUsername] = useState('');
  //Signup through firebase
  const signUp = () => {
    if (email === '' || pswd === '') {
      Alert.alert('Input Error', 'Email or Password cant be null');
      return;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      Alert.alert('Email not valid', 'The email format is not valid');
      return;
    } else {
      auth()
        .createUserWithEmailAndPassword(email, pswd)
        .then(() => {
          console.log('User account created & signed in!');
          dispatch(setLogin());
          navigation.navigate('BioFillup');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert(
              'Invalid email',
              'That email address is already in use!',
            );
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  };
  return (
    <>
      <LogoName />
      <Text style={styles.title}>Sign Up For Free</Text>
      <View style={styles.loginForm}>
        <View style={styles.txtBoxWithIcon}>
          <Image source={ICONS.profile} />
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            style={styles.textInput}></TextInput>
        </View>
        <View style={styles.txtBoxWithIcon}>
          <Image source={ICONS.email} />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={styles.textInput}></TextInput>
        </View>
        <View style={styles.txtBoxWithIcon}>
          <Image source={ICONS.password} />
          <TextInput
            value={pswd}
            onChangeText={setPswd}
            placeholder="Password"
            style={styles.textInput}
            hidde></TextInput>
        </View>
        <View style={styles.chkboxes}>
          <Checkbox text="Keep me signed in" />
          <Checkbox text="Email me about special pricing" />
        </View>
      </View>
      <PrimaryButton
        text="Create Account"
        pressed={() => {
          signUp();
        }}
      />
      <Text
        style={styles.alreadyAccount}
        onPress={() => {
          navigation.navigate('LoginPage');
        }}>
        Already have an account?
      </Text>
    </>
  );
};

export default withBackground(SignUp);

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
    marginBottom: 30,
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
  txtBoxWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#000',
    width: '80%',
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 15,
    margin: 5,
    height: 57,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    shadowColor: '#5A6CEA',
    shadowOffset: {width: -12, height: 100},
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 10,
  },
  textInput: {
    marginLeft: 20,
    flexBasis: '80%',
  },
  chkboxes: {
    margin: 15,
    width: '80%',
    alignItems: 'flex-start',
  },
  alreadyAccount: {
    alignSelf: 'center',
    color: COLORS.secondary,
    fontFamily: 'BentonSans Medium',
    fontWeight: '800',
    textDecorationLine: 'underline',
    marginVertical: 30,
    fontSize: 12,
    position: 'absolute',
    marginTop: 750,
  },
});
