import React from 'react';
import DisplayInformation from './components/DisplayInformation/DisplayInformation';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './components/Profile/Profile';
import BioFillup from './components/Screens/BioFIllup/BioFillup';

const ProfileStack = () => {
  const ProfileStack = createStackNavigator();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="DisplayInformation"
        component={DisplayInformation}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="BioFillup"
        component={BioFillup}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStack;
