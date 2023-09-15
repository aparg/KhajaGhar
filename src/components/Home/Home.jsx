import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyle from '../../Typography/typography';
import SearchBar from '../SearchBar/SearchBar';
import PatternGradientView from '../PatternGradientView/PatternGradientView';
import getCurrentMonth from '../../getMonth';
import WhiteButton from '../Layouts/WhiteButton/WhiteButton';
import {ICONS, ILLUSTRATIONS} from '../../images/images';
import ScrollableList from '../Layouts/ScrollableList/ScrollableList';
import axiosFood from '../../axios/axiosFood';
import Filter from '../Filter/Filter';
import {staticData} from '../../staticData';
import {COLORS} from '../../Colors/Colors';

const Home = ({navigation}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const toggleFilterOpen = () => {
    filterOpen ? setFilterOpen(false) : setFilterOpen(true);
  };
  const [data, setData] = useState([]);
  const getData = async () => {
    let datas = await axiosFood(0, 5);
    setData(datas);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView
      style={globalStyle.wrapper}
      showsVerticalScrollIndicator={false}>
      <View>
        <Text style={globalStyle.bigBold}>Find Your</Text>
        <Text style={globalStyle.bigBold}>Favorite Food</Text>
      </View>
      <View style={styles.searchArea}>
        <View style={styles.searchBar}>
          <SearchBar style={styles.searchBar} />
        </View>
        <Pressable
          style={styles.filterIconContainer}
          onPress={toggleFilterOpen}>
          <Image source={ICONS.filter} />
        </Pressable>
      </View>
      {filterOpen ? (
        <Filter />
      ) : (
        <>
          <PatternGradientView>
            <View style={styles.bannerWrapper}>
              <Image
                source={ILLUSTRATIONS.icecream}
                style={styles.bannerImage}
              />
              <View style={styles.bannerTxtWrapper}>
                <Text style={styles.bannerTxt}>Special Deal For</Text>
                <Text style={styles.bannerTxt}>{getCurrentMonth()}</Text>
                <WhiteButton text="Buy Now"></WhiteButton>
              </View>
            </View>
          </PatternGradientView>
          <View style={styles.buySection}>
            <ScrollableList
              title="Nearest Restaurant"
              getViewMorePage={() =>
                navigation.navigate('NearestRestaurantList')
              }
              data={staticData}
              displayInformation={id =>
                navigation.navigate('DisplayInformation', {id})
              }
            />
            <ScrollableList
              title="Popular Menu"
              getViewMorePage={() => navigation.navigate('PopularMenuList')}
              data={data ? data : staticData}
              displayInformation={() => navigation.navigate('PopularMenuList')}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  filterIconContainer: {
    backgroundColor: COLORS.translucentSecondary,
    height: 50,
    borderRadius: 15,
    flexBasis: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchBar: {
    flexBasis: '83%',
  },
  bannerImage: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    bottom: '0',
  },
  bannerWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
  },
  bannerTxt: {
    color: 'white',
    fontWeight: '800',
    fontSize: 22,
  },
  bannerTxtWrapper: {
    alignSelf: 'center',
  },
  buySection: {
    // marginTop: 200,
  },
  banner: {
    display: 'flex',
    marginBottom: 200,
    borderWidth: 10,
    borderColor: 'black',
  },
});
