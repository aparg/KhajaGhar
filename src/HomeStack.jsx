import {View, Text} from 'react-native';
import React from 'react';
import Home from './components/Home/Home';
import NearestRestaurantList from './components/NearestRestaurantList/NearestRestaurantList';
import PopularMenuList from './components/PopularMenuList/PopularMenuList';
import DisplayInformation from './components/DisplayInformation/DisplayInformation';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="NearestRestaurantList"
        component={NearestRestaurantList}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="PopularMenuList"
        component={PopularMenuList}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="DisplayInformation"
        component={DisplayInformation}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStack;
