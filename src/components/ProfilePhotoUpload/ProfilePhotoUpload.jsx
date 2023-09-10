import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import BackButton from '../BackButton/BackButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import globalStyle from '../../Typography/typography';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {saveImagePath} from '../../../slices/slice';
import {ICONS} from '../../images/images';

const ProfilePhotoUpload = ({navigation}) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCameraOpen = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={globalStyle.wrapper}>
      <BackButton to="PaymentMethod" navigation={navigation} />
      <Text style={styles.bigBold}>Upload Your Photo Profile</Text>
      <View style={styles.contentWrapper}>
        {selectedImage ? (
          <>
            <Image
              source={{uri: selectedImage}}
              height={400}
              width={300}
              style={styles.displayImage}
            />
            <SecondaryButton
              text="Change photo"
              pressed={() => setSelectedImage(null)}
            />
          </>
        ) : (
          <>
            <Pressable
              onPress={() => {
                handleImagePick();
              }}
              style={styles.box}>
              <Image source={ICONS.selectFromGallery} />
              <Text>From Gallery</Text>
            </Pressable>
            <Pressable
              style={styles.box}
              onPress={() => {
                handleCameraOpen();
              }}>
              <Image source={ICONS.openCamera} />
              <Text>Take Photo</Text>
            </Pressable>
          </>
        )}
      </View>
      <PrimaryButton
        text="Next"
        pressed={() => {
          selectedImage && dispatch(saveImagePath({imgPath: selectedImage}));
          navigation.navigate('SetLocation');
        }}
      />
    </View>
  );
};

export default ProfilePhotoUpload;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    paddingHorizontal: 30,
    width: '100%',
    height: '30%',
    marginVertical: 20,
    justifyContent: 'center',
  },
  bigBold: {
    fontFamily: 'BentonSans Bold',
    color: '#09051C',
    fontWeight: '800',
    fontSize: 35,
    marginBottom: 10,
  },
  contentWrapper: {
    marginBottom: 10,
  },
  wrapper: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  displayImage: {
    width: 300,
    height: 400,
    borderRadius: 10,
    margin: 10,
    alignSelf: 'center',
  },
});
