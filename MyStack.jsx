import {createStackNavigator} from '@react-navigation/stack';
import FirstEntryPage from './src/components/FirstEntryPage/FirstEntryPage';
import {NavigationContainer} from '@react-navigation/native';
import SecondEntryPage from './src/components/SecondEntryPage/SecondEntryPage';
import LoginPage from './src/components/LoginPage/LoginPage';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
