import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import HorizontalBox from '../Layouts/HorizontalBox/HorizontalBox';
import {ICONS} from '../../images/images';
import {useSelector} from 'react-redux';
import {COLORS} from '../../Colors/Colors';
import globalStyle from '../../Typography/typography';
const Notifications = () => {
  const orders = useSelector(state => state.profileData.orders);
  return (
    <View style={globalStyle.wrapper}>
      <Text style={globalStyle.bigBold}>Notifications</Text>
      <ScrollView>
        {orders.map(order => {
          return (
            <HorizontalBox key={order.orderId}>
              <View style={styles.wrapper}>
                <Image
                  source={ICONS.congrats}
                  style={styles.notificationImg}></Image>
                <View key={order.orderId}>
                  <Text style={styles.orderId}>#{order.orderId}</Text>
                  <Text>Order with this order id has been</Text>
                  <Text>picked up by driver</Text>
                </View>
              </View>
            </HorizontalBox>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  orderId: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '800',
  },
  notificationImg: {
    height: 75,
    width: 80,
  },
});
