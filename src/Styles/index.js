import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    resizeMode: 'contain',
    height: 300,
  },
});

export const colors = {
  primary: '#4e575d',
  secondary: '#929292',
  blue: '#004efe',
  border: '#3f3f3f',
  tabPrimary: '#f7f9f9',
  white: '#fff'
}

export const fontSizes = {
  primary: 25,
  secondary: 18,
}