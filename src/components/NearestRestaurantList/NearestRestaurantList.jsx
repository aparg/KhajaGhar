import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';
import {staticData} from '../../staticData';
import ItemBox from '../Layouts/ItemBox/ItemBox';
import globalStyle from '../../Typography/typography';
import FullScreenScrollableList from '../Layouts/FullScreenScrollableList/FullScreenScrollableList';
import SearchBar from '../SearchBar/SearchBar';
import {COLORS} from '../../Colors/Colors';
import {ICONS} from '../../images/images';

const NearestRestaurantList = ({navigation}) => {
  const [data, setData] = useState(staticData);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <View style={globalStyle.wrapper}>
      <Text style={globalStyle.bigBold}>Find Your</Text>
      <Text style={globalStyle.bigBold}>Favorite Food</Text>
      <SearchBar data={data} dataSetter={setData} />

      <Text style={[globalStyle.smallBold, styles.title]}>Restaurants</Text>
      <FullScreenScrollableList
        data={data}
        displayInformation={id =>
          navigation.navigate('DisplayInformation', {id: id})
        }
      />
    </View>
  );
};

export default NearestRestaurantList;

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
  },
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
});
