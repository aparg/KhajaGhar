import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyle from '../../Typography/typography';
import SearchBar from '../SearchBar/SearchBar';
import LinearGradient from 'react-native-linear-gradient';
import PatternGradientView from '../PatternGradientView/PatternGradientView';
import {ICONS, ILLUSTRATIONS} from '../../images/images';

const Home = () => {
  return (
    <View style={globalStyle.wrapper}>
      <View>
        <Text style={globalStyle.bigBold}>Find Your</Text>
        <Text style={globalStyle.bigBold}>Favorite Food</Text>
      </View>
      <View style={styles.searchArea}>
        <View style={styles.searchBar}>
          <SearchBar style={styles.searchBar} />
        </View>
        <View style={styles.filterIconContainer}>
          <Image source={ICONS.filter} />
        </View>
      </View>
      <PatternGradientView>
        <Image source={ILLUSTRATIONS.icecream} />
        <Text>HELLO</Text>
      </PatternGradientView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  filterIconContainer: {
    backgroundColor: 'rgba(249, 168, 77, 0.1)',
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
  },
  searchBar: {
    flexBasis: '83%',
  },
});
