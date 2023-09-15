import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import globalStyle from '../../../Typography/typography';
import ItemBox from '../ItemBox/ItemBox';
// import fetcher form '../'
const ScrollableList = ({title, getViewMorePage, data, displayInformation}) => {
  const renderItem = ({item}) => {
    <View>
      <Image source={item.logo_photos[0]} />
      <Text>{item.name}</Text>
    </View>;
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.sectionTitle}>
        <Text style={globalStyle.smallBold}>{title}</Text>
        {getViewMorePage && (
          <Pressable
            onPress={() => {
              getViewMorePage();
            }}
            style={styles.viewMorePressable}>
            <Text style={styles.viewMoreText}>View More</Text>
          </Pressable>
        )}
      </View>
      <ScrollView
        horizontal={true}
        key="nearestRestaurant"
        showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <ItemBox
              img={item.image}
              itemName={item.name}
              description={
                item.distance ? `${item.distance} km` : `$${item.price}`
              }
              key={item.id}
              id={item.id}
              pressed={() => {
                displayInformation && displayInformation(item.id);
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ScrollableList;

const styles = StyleSheet.create({
  viewMoreText: {
    color: '#FF7C32',
    marginLeft: 'auto',
  },
  sectionTitle: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  viewMorePressable: {
    marginLeft: 'auto',
  },
  wrapper: {
    marginVertical: 20,
    justifyContent: 'center',
  },
});
