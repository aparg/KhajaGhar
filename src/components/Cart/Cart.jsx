import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackButton from '../BackButton/BackButton';
import globalStyle from '../../Typography/typography';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import CartItem from './CartItem';
import {nanoid} from '@reduxjs/toolkit';
import PatternGradientView from '../PatternGradientView/PatternGradientView';
import WhiteButton from '../Layouts/WhiteButton/WhiteButton';
import {setCheckedOut} from '../../../slices/slice';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState(null);
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  let data = useSelector(state => state.profileData.cartItems);

  useEffect(() => {
    setCartItems(data);
    totalCalculator(data);
  }, [data]);
  const totalCalculator = data => {
    let price = 0;
    data.forEach(item => {
      price += fixedToTwo(item.price) * item.quantity;
    });
    setSubTotal(price);
    setDeliveryCharge(0.05);
  };

  const fixedToTwo = number => parseFloat(number.toFixed(2));

  return (
    <View style={globalStyle.wrapper}>
      <BackButton to="Home" navigation={navigation} />
      <Text style={globalStyle.bigBold}>Order Details</Text>
      <ScrollView
        style={styles.scrollWrapper}
        showsVerticalScrollIndicator={false}>
        {cartItems?.map((element, idx) => (
          <CartItem item={element} key={nanoid()} />
        ))}
      </ScrollView>
      <PatternGradientView>
        <View style={styles.orderDetailsWrapper}>
          <View style={styles.section}>
            <Text style={styles.text}>Sub Total</Text>
            <Text style={styles.value}>{fixedToTwo(subTotal)}$</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>Delivery Charge</Text>
            <Text style={styles.value}>{deliveryCharge}$</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>Discount</Text>
            <Text style={styles.value}>
              {fixedToTwo((10 / 100) * subTotal)}$
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.value}>
              {fixedToTwo((10 / 100) * subTotal + deliveryCharge + subTotal)}$
            </Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <WhiteButton
            text="Place My Order"
            width={300}
            pressed={() => {
              if (cartItems.length !== 0) {
                dispatch(setCheckedOut(nanoid()));
                Alert.alert(
                  'Order placed!',
                  'Check notification tab to show status',
                );
              } else {
                Alert.alert('Buy some items!', 'Nothing in cart');
              }
            }}></WhiteButton>
        </View>
      </PatternGradientView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  text: {color: 'white', fontWeight: '800'},
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  value: {justifyContent: 'flex-end', color: 'white', fontWeight: '800'},
  orderDetailsWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  scrollWrapper: {
    height: 410,
    marginBottom: 20,
  },
});
