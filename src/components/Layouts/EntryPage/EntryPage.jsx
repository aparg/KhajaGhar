import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const EntryPage = ({
  welcomeNoteLine1,
  welcomeNoteLine2,
  messageLine1,
  messageLine2,
  imagePath,
  pressed,
}) => {
  return (
    <View style={styles.main}>
      <Image source={imagePath} style={styles.mainImg} />
      <View style={styles.textContainer}>
        <View style={styles.welcomeNoteContainer}>
          <Text style={styles.welcomeNote}>{welcomeNoteLine1}</Text>
          {welcomeNoteLine2 && (
            <Text style={styles.welcomeNote}>{welcomeNoteLine2}</Text>
          )}
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{messageLine1}</Text>
          {messageLine2 && <Text style={styles.message}>{messageLine2}</Text>}
        </View>
      </View>
      <PrimaryButton text="Next" pressed={pressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  mainImg: {
    alignSelf: 'center',
    marginTop: 70,
    width: '100%',
    flexBasis: '50%',
  },
  textContainer: {
    marginTop: 20,
    flexBasis: '25%',
  },
  welcomeNote: {
    fontFamily: 'BentonSans Bold',
    fontWeight: '800',
    fontSize: 22,
    color: '#000',
  },
  message: {
    fontSize: 12,
    color: '#000',
  },
  welcomeNoteContainer: {
    alignItems: 'center',
    margin: 10,
  },
  messageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});
export default EntryPage;
