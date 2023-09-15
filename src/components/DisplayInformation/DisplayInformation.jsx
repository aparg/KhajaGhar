import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import {staticData} from '../../staticData';
// import BottomSheet from '@gorhom/bottom-sheet';
import globalStyle from '../../Typography/typography';
import {ICONS} from '../../images/images';
import {saveFavorites, removeFavorites} from '../../../slices/slice';
import {useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {nanoid} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {COLORS} from '../../Colors/Colors';

const DisplayInformation = ({route}) => {
  const dispatch = useDispatch();
  const {id} = route.params;
  const [displayData, setDisplayData] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const favoritesData = useSelector(state => state.profileData.favorites);

  //check if the item is favorited or not
  const isFavorite = id => {
    if (favoritesData.includes(id)) setFavorite(true);
  };

  //get object with the given id
  const findData = id => {
    dataObj = staticData.find(element => id == element.id);
    setDisplayData(dataObj);
  };

  useEffect(() => {
    findData(id);
  }, []);

  useEffect(() => {
    isFavorite(id);
  }, [favoritesData]);

  return (
    <ScrollView
      style={globalStyle.wrapper}
      showsVerticalScrollIndicator={false}>
      {/* <BottomSheet snapPoints={snapPoints}> */}
      {displayData ? (
        <>
          <Image
            source={displayData.backgroundPhoto}
            style={styles.backgroundImage}
            key="img"
          />
          <View style={styles.topSection}>
            <View style={styles.tagArea}>
              {displayData.tags?.map(tag => {
                return (
                  <View style={styles.tagContainer} key={nanoid()}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                );
              })}
            </View>
            {/*for favorites */}
            {favorite ? (
              <Pressable
                onPress={() => {
                  dispatch(removeFavorites(id));
                  setFavorite(!favorite);
                }}>
                <AntDesign name="heart" color="red" style={styles.heart} />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  dispatch(saveFavorites(id));
                  setFavorite(!favorite);
                }}>
                <AntDesign name={'hearto'} style={styles.heart} />
              </Pressable>
            )}
          </View>
          <View style={styles.locationContainer} key="location">
            <Image source={ICONS.locationGreen} />
            <Text>{displayData.distance} km</Text>
          </View>
          <View key="data">
            <Text style={globalStyle.bigBold}>{displayData.name}</Text>
            <Text>{displayData.information}</Text>
          </View>
        </>
      ) : (
        <ActivityIndicator />
      )}

      {/* </BottomSheet> */}
    </ScrollView>
  );
};

export default DisplayInformation;

const styles = StyleSheet.create({
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagContainer: {
    padding: 10,
    backgroundColor: 'rgba(83,232,139,0.1)',
    // opacity: 0.1,
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
  },
  tagText: {
    color: COLORS.primary,
    fontWeight: '800',
  },
  tagArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    // justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
  },
  backgroundImage: {
    width: '100%',
    borderRadius: 10,
  },
  heart: {
    fontSize: 30,
  },
});
