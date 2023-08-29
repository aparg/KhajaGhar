import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const InputTextBox = ({value, onChange, placeholder}) => {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      style={styles.textInput}
      placeholder={placeholder}></TextInput>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: '#000',
    width: '80%',
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 15,
    margin: 5,
    height: 57,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    // boxShadow: '12px 26px 50px 0px rgba(90, 108, 234, 0.07)'
    shadowColor: '#5A6CEA',
    shadowOffset: {width: -12, height: 100},
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 10,
  },
});
export default InputTextBox;
