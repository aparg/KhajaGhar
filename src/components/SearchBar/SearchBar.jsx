import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import globalStyle from '../../Typography/typography';
// import staticData from '../../'
import {useState, useEffect} from 'react';
import {ICONS} from '../../images/images';
import {COLORS} from '../../Colors/Colors';

const SearchBar = ({data, dataSetter}) => {
  const [value, setValue] = useState('');
  const [staticData, setStaticData] = useState(data);
  const dataFilter = value => {
    let arr = [];
    staticData.forEach(obj => {
      if (obj.name.includes(value)) {
        arr.push(obj);
      }
    });
    dataSetter(arr);
  };
  return (
    <>
      <View style={styles.searchBarContainer}>
        <Image source={ICONS.search} />
        <TextInput
          placeholder="What do you want to order?"
          placeholderTextColor="#DA6317"
          style={styles.textBox}
          value={value}
          onChangeText={val => {
            setValue(val);
            dataFilter(val);
          }}
        />
      </View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.translucentSecondary,
    // opacity: 0.1,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
    height: 50,
    width: '100%',
  },
  textBox: {
    color: '#DA6317',
    opacity: 1,
    paddingHorizontal: 10,
  },
});
