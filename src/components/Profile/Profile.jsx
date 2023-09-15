import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import globalStyle from '../../Typography/typography';
import {ICONS} from '../../images/images';
import {saveFavorites} from '../../../slices/slice';
import {useDispatch} from 'react-redux';
import {staticData} from '../../staticData';
import ItemBox from '../Layouts/ItemBox/ItemBox';
import ScrollableList from '../Layouts/ScrollableList/ScrollableList';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import {logOut} from '../../../slices/slice';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const profilePhoto = useSelector(state => state.profileData.profilePhoto);
  const firstName = useSelector(state => state.profileData.firstName);
  const lastName = useSelector(state => state.profileData.lastName);
  const email = useSelector(state => state.profileData.email);
  const favorites = useSelector(state => state.profileData.favorites);
  const [favoriteItems, setFavoriteItems] = useState([]);
  useEffect(() => {
    let itemsArray = [];
    favorites.forEach(id => {
      for (element of staticData) {
        if (id === element.id) {
          itemsArray.push(element);
        }
      }
    });
    setFavoriteItems(itemsArray);
  }, [favorites]);
  return (
    <ScrollView style={styles.profileWrapper}>
      {profilePhoto ? (
        <Image source={{uri: profilePhoto}} style={styles.profileImg} />
      ) : (
        <Image source={ICONS.emptyProfileImg} style={styles.profileImg} />
      )}
      <View style={styles.nameSection}>
        <View style={styles.nameEmail}>
          <Text style={globalStyle.bigBold}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('BioFillup', {
              screen: 'Profile',
              params: {fromProfileScreen: true},
            });
          }}>
          <Image source={ICONS.edit} style={styles.editIcon} />
        </Pressable>
      </View>
      <View style={styles.favoritesSection}>
        <ScrollableList
          title="Favorites"
          data={favoriteItems}
          displayInformation={id =>
            navigation.navigate('DisplayInformation', {id})
          }
        />
      </View>
      <View style={styles.logoutBtn}>
        <SecondaryButton text="Log Out" pressed={() => dispatch(logOut())} />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  nameSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: '100%',
    height: 500,
    borderRadius: 15,
  },
  editIcon: {
    marginLeft: 'auto',
  },
  profileWrapper: {
    backgroundColor: '#fff',
    padding: 15,
  },
  nameEmail: {
    width: '80%',
  },
  logoutBtn: {
    marginBottom: 20,
  },
});
