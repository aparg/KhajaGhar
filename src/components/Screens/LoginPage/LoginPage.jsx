import {Image, StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import {useState, useEffect} from 'react';
import withBackground from '../../hocs/withBackground';
import {useDispatch} from 'react-redux';
import {
  saveEmail,
  saveImagePath,
  saveProfileData,
  setLogin,
} from '../../../../slices/slice';
import PrimaryButton from '../../Layouts/PrimaryButton/PrimaryButton';
import InputTextBox from '../../InputTextBox/InputTextBox';
import LogoName from '../../LogoName/LogoName';
import globalStyle from '../../../Typography/typography';
import {SOCIALS} from '../../../images/images';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {COLORS} from '../../../Colors/Colors';
import auth from '@react-native-firebase/auth';
const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  useEffect(() => GoogleSignin.configure(), []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(saveEmail({email: userInfo.user.email}));
      dispatch(saveImagePath({imgPath: userInfo.user.photo}));
      dispatch(
        saveProfileData({
          firstName: userInfo.user.givenName,
          lastName: userInfo.user.familyName,
        }),
      );
      dispatch(setLogin());
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const logIn = () => {
    if (email === '' || pswd === '') {
      Alert.alert('Input Error', 'Email or Password cant be null');
      return;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      Alert.alert('Email not valid', 'The email format is not valid');
      return;
    } else {
      auth()
        .signInWithEmailAndPassword(email, pswd)
        .then(() => {
          console.log('User account created & signed in!');
          navigation.navigate('TabNavigator');
          setLogin();
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('Invalid Credentials', 'Please re-enter values');
          }
        });
    }
  };
  return (
    <View style={globalStyle.wrapper}>
      <LogoName />
      <Text style={styles.title}>Login to Your Account</Text>
      <View style={styles.loginForm}>
        <InputTextBox
          value={email}
          onChangeText={setEmail}
          placeholder="Email"></InputTextBox>
        <InputTextBox
          value={pswd}
          onChangeText={setPswd}
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
            <Image source={SOCIALS.facebook} style={styles.googleIcon}></Image>
            <Text style={styles.socialTxt}>Facebook</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            signIn();
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
          logIn();
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
    color: COLORS.secondary,
    fontFamily: 'BentonSans Medium',
    fontWeight: '800',
    textDecorationLine: 'underline',
    marginTop: 5,
    fontSize: 12,
  },
});
