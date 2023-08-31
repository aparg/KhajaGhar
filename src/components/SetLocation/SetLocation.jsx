import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import BackButton from '../BackButton/BackButton';
import withBackground from '../hocs/withBackground';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const SetLocation = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <BackButton to="ProfilePhotoUpload" navigation={navigation} />
      <Text style={styles.bigBold}>Set Your Location</Text>
      <Text style={styles.small}>
        This data will be displayed in your account
      </Text>
      <Text style={styles.small}>profile for security</Text>
      <View style={styles.box}>
        <View style={styles.rowFlex}>
          <Image
            source={require('../../../assets/images/icons/location.png')}
          />
          <Text style={styles.locationInput}>Your Location</Text>
        </View>
        <Pressable onPress={() => {}} style={styles.setLocationBtn}>
          <Text style={styles.btnTxt}>Set Location</Text>
        </Pressable>
      </View>
      <PrimaryButton text="Next" />
    </View>
  );
};

export default withBackground(SetLocation);

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  bigBold: {
    fontFamily: 'BentonSans Bold',
    color: '#09051C',
    fontWeight: '800',
    fontSize: 35,
    marginBottom: 10,
  },
  small: {
    fontFamily: 'BentonSans Bold',
    color: '#09051C',
    fontSize: 15,
    marginTop: 5,
  },
  setLocationBtn: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  btnTxt: {
    color: '#09051C',
    fontSize: 14,
    fontWeight: '800',
  },
  box: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 50,
    borderRadius: 15,
    shadowColor: '#5A6CEA',
    elevation: 8,
  },
  rowFlex: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  locationInput: {
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});
