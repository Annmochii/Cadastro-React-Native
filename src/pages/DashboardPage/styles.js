import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  FullProject: {
    gap: 16,
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
  },
  OrangeBack:{
    height: 218,
    width: '100%',
    gap: 16,
    paddingTop: 14,
    borderBottomEndRadius: 32,
    borderBottomStartRadius: 32,
    backgroundColor: "#F86041",
    marginBottom: 48,
  },
  Profile: {
    gap: 16,
    paddingInline: '1rem',
  },
  Person: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'end',
  },
  ProfilePicture: {
    height: 80,
    width: 80,
  },
  MainContainer:{
    width: '100%',
    gap: 8,
    paddingInline: '1rem',
  },
  Container: {
    gap: '16px',
    width: '100%',  
  },
  Hero: {
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  Name: {
    fontFamily: 'PoppinsBold',
    fontSize: '32px',
    color: '#F7F7F7',
  },
  Text: {
    fontFamily: 'MerriweatherLight',
    color: '#26262B',
  },
});

export default styles;