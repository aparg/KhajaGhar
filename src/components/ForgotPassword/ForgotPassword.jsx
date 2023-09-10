import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyle from '../../Typography/typography';
import BackButton from '../BackButton/BackButton';
import shadow from '../../Typography/shadow';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import {useSelector} from 'react-redux';
import {ICONS} from '../../images/images';

const ForgotPassword = ({navigation}) => {
  const mobileNumber = useSelector(state => state.profileData.mobileNumber);
  const regexForMailType = /@(.*)/;
  return (
    <View style={styles.wrapper}>
      <BackButton to="LoginPage" navigation={navigation} />
      <Text style={globalStyle.bigBold}>ForgotPassword?</Text>
      <Text style={globalStyle.small}>
        Select which contact details should be used
      </Text>
      <Text style={globalStyle.small}>to reset your password</Text>
      <View style={[shadow.blue, styles.box]}>
        <Image source={ICONS.message} />
        <View style={styles.boxTxtContent}>
          <Text>Via sms:</Text>
          <Text style={styles.bold}>
            •••• •••• {mobileNumber.slice(10, 15)}
          </Text>
        </View>
      </View>

      <View style={[shadow.blue, styles.box]}>
        <Image source={ICONS.emailBold} />
        <View style={styles.boxTxtContent}>
          <Text>Via email:</Text>
          <Text style={styles.bold}>••••</Text>
          <Text>{mobileNumber.match(regexForMailType)}</Text>
          <Text></Text>
        </View>
      </View>
      <PrimaryButton
        pressed={() => {
          navigation.navigate('ResetPassword');
        }}
        text="Next"
      />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  box: {
    marginTop: 10,
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    // fontWeight: '800',
    fontSize: 30,
  },
  boxTxtContent: {
    marginLeft: 10,
  },
});
