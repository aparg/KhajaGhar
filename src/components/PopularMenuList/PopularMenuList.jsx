import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
import {staticData} from '../../staticData';
import ItemBox from '../Layouts/ItemBox/ItemBox';
import globalStyle from '../../Typography/typography';
// import FullScreenScrollableList from '../Layouts/FullScreenScrollableList/FullScreenScrollableList';
import SearchBar from '../SearchBar/SearchBar';
import axiosFood from '../../axios/axiosFood';
import {STATICS} from '../../images/images';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import {saveCartItem} from '../../../slices/slice';
import {useDispatch} from 'react-redux';
import shadow from '../../Typography/shadow';
import GreenActivityIndicator from '../GreenActivityIndicator/GreenActivityIndicator';
import HorizontalBox from '../Layouts/HorizontalBox/HorizontalBox';
import PrimaryButton from '../Layouts/PrimaryButton/PrimaryButton';

const PopularMenuList = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loadingMoreData, setLoadingMoreData] = useState(false);
  const [endReached, setEndReached] = useState(false);
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = async () => {
    setLoadingMoreData(true);
    try {
      let fetchedData = await axiosFood(data.length, 5);
      if (fetchedData !== null) {
        setLoadCount(0);
        setLoadingMoreData(false);
        handleFetchedData(fetchedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderItem = ({item}) => {
    return (
      <HorizontalBox>
        <Image source={item.image} style={styles.img}></Image>
        <View style={styles.itemDetail}>
          <Text style={globalStyle.smallBold}>{item.name}</Text>
        </View>
        <Text style={styles.price}>${item.price}</Text>
        <SecondaryButton
          text="BUY"
          width={60}
          pressed={() => {
            item = {...item, quantity: 1};
            Alert.alert('', 'Added to cart!');
            //add a single item to cart
            dispatch(saveCartItem(item));
          }}
        />
      </HorizontalBox>
    );
  };

  const handleFetchedData = fetchedData => {
    if (fetchedData.length === 0) {
      //when all items have been fetched
      setEndReached(true);
      Alert.alert(
        'End of List',
        'No more data to be fetched',
        [
          {
            text: 'OK',
          },
        ],
        {
          cancelable: true,
        },
      );
    }
    setData([...data, ...fetchedData]);
  };

  return (
    <View style={[globalStyle.wrapper, styles.bottomWrapper]}>
      <Text style={globalStyle.bigBold}>Find Your</Text>
      <Text style={globalStyle.bigBold}>Favorite Food</Text>
      <Text style={[globalStyle.smallBold, styles.title]}>Popular Menu</Text>
      <View style={styles.listWrapper}>
        {data.length != 0 ? (
          <FlatList
            style={styles.list}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            onEndReached={() => !endReached && !loadingMoreData && loadMore()}
          />
        ) : (
          <GreenActivityIndicator />
        )}
        {loadingMoreData && <GreenActivityIndicator />}
      </View>
    </View>
  );
};

export default PopularMenuList;

const styles = StyleSheet.create({
  title: {
    marginVertical: 15,
  },
  itemBuyWrapper: {
    backgroundColor: 'white',
    marginVertical: 10,
    flexDirection: 'row',
    width: '98%',
    height: 100,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 80,
    height: '100%',
    borderRadius: 10,
  },
  itemDetail: {
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  buyBtn: {
    width: 20,
  },
  price: {
    fontWeight: '800',
    color: '#FEAD1D',
    fontSize: 22,
  },
  list: {
    height: 525,
  },
});
