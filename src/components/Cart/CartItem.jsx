import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import {useState} from 'react';
import {Swipeable} from 'react-native-gesture-handler';
import {staticData} from '../../staticData';
import {ICONS, STATICS} from '../../images/images';
import globalStyle from '../../Typography/typography';
import shadow from '../../Typography/shadow';
import {deleteCartItem} from '../../../slices/slice';
import {useDispatch} from 'react-redux';
import {saveItemsNumber} from '../../../slices/slice';
import {LinearTextGradient} from 'react-native-text-gradient';
import {COLORS} from '../../Colors/Colors';

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  // const [numberOfItems, setNumberOfItems] = useState(item.quantity);
  // const [itemPrice, setItemPrice] = useState(item.price * item.quantity);
  const rightSwipe = ({id}) => {
    return (
      <View style={[styles.deleteContainer, shadow.blue]}>
        <Image source={ICONS.trash} style={styles.deleteImg} />
      </View>
    );
  };

  const deleteItem = id => {
    dispatch(deleteCartItem(id));
  };
  return (
    <Swipeable
      renderRightActions={rightSwipe}
      rightThreshold={200}
      onSwipeableOpen={() => deleteItem(item.id)}>
      <View style={[styles.box, shadow.blue]}>
        <Image source={item.image} style={styles.img}></Image>
        <View style={styles.itemDetail}>
          <Text style={globalStyle.smallBold}>{item.name}</Text>
          <LinearTextGradient
            style={styles.bigText}
            locations={[0, 1]}
            colors={[COLORS.secondary, COLORS.primary]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}>
            <Text style={styles.itemPrice}>
              ${parseFloat((item.price * item.quantity).toFixed(2))}
            </Text>
          </LinearTextGradient>
        </View>
        <View style={styles.itemNumberEditor}>
          <Pressable
            style={styles.reduceBtn}
            onPress={() => {
              dispatch(
                saveItemsNumber({
                  id: item.id,
                  numberOfItems: item.quantity - 1,
                }),
              );
            }}>
            <Image source={ICONS.minus} />
          </Pressable>
          <Text style={styles.numberOfItems}>{item.quantity}</Text>
          <Pressable
            style={styles.addBtn}
            onPress={() => {
              dispatch(
                saveItemsNumber({
                  id: item.id,
                  numberOfItems: item.quantity + 1,
                }),
              );
            }}>
            <Image source={ICONS.plus} />
          </Pressable>
        </View>
      </View>
    </Swipeable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  deleteContainer: {
    backgroundColor: '#FEAD1D',
    justifyContent: 'flex-end',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    padding: 5,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  box: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    padding: 5,
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  img: {
    width: 62,
    height: '100%',
    borderRadius: 10,
    flexBasis: '30%',
  },
  itemDetail: {
    flexBasis: '40%',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
  itemNumberEditor: {
    flexDirection: 'row',
  },
  numberOfItems: {
    marginHorizontal: 10,
  },
  deleteImg: {
    marginRight: 20,
  },
  bigText: {
    fontWeight: '800',
    fontSize: 20,
    marginTop: 20,
  },
});
