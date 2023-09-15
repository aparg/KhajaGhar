import {createStackNavigator} from '@react-navigation/stack';
import FirstEntryPage from './src/components/FirstEntryPage/FirstEntryPage';
import {NavigationContainer} from '@react-navigation/native';
import SecondEntryPage from './src/components/SecondEntryPage/SecondEntryPage';
import LoginPage from './src/components/Screens/LoginPage/LoginPage';
import SignUp from './src/components/SignUp/SignUp';
import BioFillup from './src/components/Screens/BioFIllup/BioFillup';
import PaymentMethod from './src/components/PaymentMethod/PaymentMethod';
import ProfilePhotoUpload from './src/components/ProfilePhotoUpload/ProfilePhotoUpload';
import SetLocation from './src/components/SetLocation/SetLocation';
import ProfileReady from './src/components/ProfileReady/ProfileReady';
import CodeVerification from './src/components/CodeVerification/CodeVerification';
import ForgotPassword from './src/components/ForgotPassword/ForgotPassword';
import ResetPassword from './src/components/ResetPassword/ResetPassword';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import persistedProfileStore from './store/store';
import PasswordResetSuccess from './src/components/PasswordResetSuccess/PasswordResetSuccess';
import Home from './src/components/Home/Home';
import NearestRestaurantList from './src/components/NearestRestaurantList/NearestRestaurantList';
import PopularMenuList from './src/components/PopularMenuList/PopularMenuList';
import DisplayInformation from './src/components/DisplayInformation/DisplayInformation';
import TabNavigator from './src/components/TabNavigator/TabNavigator';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MyStack = () => {
  const isLoggedIn = useSelector(state => state.profileData.isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="BioFillup"
              component={BioFillup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PaymentMethod"
              component={PaymentMethod}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProfilePhotoUpload"
              component={ProfilePhotoUpload}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SetLocation"
              component={SetLocation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProfileReady"
              component={ProfileReady}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CodeVerification"
              component={CodeVerification}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PasswordResetSuccess"
              component={PasswordResetSuccess}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DisplayInformation"
              component={DisplayInformation}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="FirstEntryPage"
              component={FirstEntryPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SecondEntryPage"
              component={SecondEntryPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
