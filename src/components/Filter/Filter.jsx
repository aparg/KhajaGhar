import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyle from '../../Typography/typography';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import PrimaryButton from '../Layouts/PrimaryButton/PrimaryButton';

const Filter = () => {
  return (
    <View style={styles.filterWrapper}>
      <Text style={globalStyle.smallBold}>Type</Text>
      <View style={styles.filterSectionContainer}>
        <SecondaryButton text="Restaurant" pressed={() => {}} />
        <SecondaryButton text="Menu" />
      </View>
      <Text style={globalStyle.smallBold}>Distance</Text>
      <View style={styles.filterSectionContainer}>
        <SecondaryButton text="1km" pressed={() => {}} />
        <SecondaryButton text=">10km" />
        <SecondaryButton text="<10km" />
      </View>
      <Text style={globalStyle.smallBold}>Food</Text>
      <View style={styles.filterSectionContainer}>
        <SecondaryButton text="Cake" pressed={() => {}} />
        <SecondaryButton text="Soup" />
        <SecondaryButton text="Appetizer" />
        <SecondaryButton text="Main Course" />
        <SecondaryButton text="Desert" />
      </View>
      <PrimaryButton
        text="Search"
        topPadding={500}
        width={350}
        pressed={() => {}}
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterSectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around ',
    alignItems: 'space-around',
  },
  filterWrapper: {
    height: 600,
  },
});
