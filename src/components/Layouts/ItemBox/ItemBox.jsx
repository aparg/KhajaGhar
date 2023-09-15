import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import globalStyle from '../../../Typography/typography';
import shadow from '../../../Typography/shadow';

const ItemBox = ({img, itemName, description, index, pressed}) => {
  return (
    <Pressable onPress={pressed}>
      <View style={[styles.box, shadow.blue]} key={index}>
        <Image source={img} style={styles.img} />
        <Text style={[globalStyle.smallBold, styles.boxText]}>{itemName}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </Pressable>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 15,
    padding: 20,
    marginBottom: 5,
    height: 200,
    justifyContent: 'center',
    width: 160,
  },
  img: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    flexBasis: '60%',
  },
  boxText: {
    alignSelf: 'center',
    flexBasis: '30%',
  },
  desc: {
    alignSelf: 'center',
  },
});
