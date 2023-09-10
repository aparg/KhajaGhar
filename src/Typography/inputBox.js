import {StyleSheet} from 'react-native';

const inputBoxStyle = StyleSheet.create({
  inputBox: {
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
    alignSelf: 'center',
    marginTop: 15,
    borderWidth: 2,
  },
});

export default inputBoxStyle;
