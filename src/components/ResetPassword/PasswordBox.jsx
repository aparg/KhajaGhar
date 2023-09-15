import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {ICONS} from '../../images/images';
const PasswordBox = ({placeholder, navigation}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState('');
  const togglePasswordShown = () => {
    if (passwordShown) {
      setPasswordShown(false);
    } else {
      setPasswordShown(true);
    }
  };

  return (
    <View style={[styles.inputDiv]}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordShown}></TextInput>
      <Pressable
        style={styles.hidePswdBtn}
        onPress={() => {
          togglePasswordShown();
        }}>
        {passwordShown ? (
          <Image source={ICONS.passwordShown} />
        ) : (
          <Image source={ICONS.passwordHide} />
        )}
      </Pressable>
    </View>
  );
};

export default PasswordBox;

const styles = StyleSheet.create({
  inputDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    height: 60,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  input: {
    flexBasis: '90%',
  },
  hidePswdBtn: {
    justifyContent: 'flex-end',
    flexBasis: '10%',
  },
});
