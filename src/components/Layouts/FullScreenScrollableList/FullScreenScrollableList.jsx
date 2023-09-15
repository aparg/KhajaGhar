import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ItemBox from '../ItemBox/ItemBox';
import globalStyle from '../../../Typography/typography';

const FullScreenScrollableList = ({data, displayInformation}) => {
  const renderItem = ({item}) => {
    return (
      <ItemBox
        itemName={item.name}
        img={item.image}
        description={item.distance}
        key={item.id}
        pressed={() => {
          displayInformation && displayInformation(item.id);
        }}
      />
    );
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns="2"
        horizontal={false}
        style={styles.listStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FullScreenScrollableList;

const styles = StyleSheet.create({
  listStyle: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  wrapper: {
    height: 550,
  },
});
