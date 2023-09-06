import React from 'react';
import Congrats from '../Layouts/Congrats/Congrats';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const ProfileReady = ({navigation}) => {
  return (
    <>
      <Congrats text="Your Profile is ready to use" />
      <PrimaryButton
        text="Try Order"
        pressed={() => {
          navigation.navigate('CodeVerification');
        }}
      />
    </>
  );
};

export default ProfileReady;
