import {createStackNavigator} from '@react-navigation/stack';
import FirstEntryPage from './src/components/FirstEntryPage/FirstEntryPage';
import {NavigationContainer} from '@react-navigation/native';
import SecondEntryPage from './src/components/SecondEntryPage/SecondEntryPage';
import LoginPage from './src/components/LoginPage/LoginPage';
import SignUp from './src/components/SignUp/SignUp';
import BioFillup from './src/components/BioFIllup/BioFillup';
import PaymentMethod from './src/components/PaymentMethod/PaymentMethod';
import ProfilePhotoUpload from './src/components/ProfilePhotoUpload/ProfilePhotoUpload';
import SetLocation from './src/components/SetLocation/SetLocation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import persistedProfileStore from './store/store';

const Stack = createStackNavigator();

const MyStack = () => {
  let persistor = persistStore(persistedProfileStore);

  return (
    <Provider store={persistedProfileStore}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="FirstEntryPage">
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
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default MyStack;
