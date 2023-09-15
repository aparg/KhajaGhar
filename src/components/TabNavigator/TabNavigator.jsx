import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Home from '../Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from '../Cart/Cart';
import {ICONS} from '../../images/images';
import HomeStack from '../../HomeStack';
import ProfileStack from '../../ProfileStack';
import Notifications from '../Notifications/Notifications';
import {COLORS} from '../../Colors/Colors';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabIconWrapper}>
                <Image source={ICONS.homeLight} />
                <Text style={styles.label}>Home</Text>
              </View>
            ) : (
              <Image source={ICONS.homeLight} />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabIconWrapper}>
                <Image source={ICONS.cart} />
                <Text style={styles.label}>Cart</Text>
              </View>
            ) : (
              <Image source={ICONS.cart} />
            ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabIconWrapper}>
                <Image source={ICONS.profile} />
                <Text style={styles.label}>Profile</Text>
              </View>
            ) : (
              <Image source={ICONS.profile} />
            ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={(styles.tabIconWrapper, {width: 90})}>
                <Image source={ICONS.notification} />
                <Text style={styles.label}>Notification</Text>
              </View>
            ) : (
              <Image source={ICONS.notification} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabIconWrapper: {
    backgroundColor: 'rgba(83, 232, 139, 0.1)',
    tintColor: COLORS.primary,
    flexDirection: 'row',
    width: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  label: {
    fontSize: 14,
    marginHorizontal: 3,
    fontWeight: '600',
    color: '#000',
  },
});
