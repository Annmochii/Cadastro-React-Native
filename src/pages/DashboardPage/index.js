import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { Link } from '@react-navigation/native';
import { DefaultButton } from '../../components/DefaultButton';
import { WhiteArrow } from '../../components/WhiteArrow/index.js';
import styles from './styles'
import RoundedCard from '../../components/RoundedCard/index.js';
import ProfileInfo from '../../components/ProfileInfo';

export default function DashboardPage() {

  const [loaded] = useFonts({
    PoppinsMedium: require('../../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('../../../assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('../../../assets/fonts/MerriweatherSans-Regular.ttf'),
  });


  return (
    <View style={styles.FullProject}>
      <View style={styles.OrangeBack}>
        <WhiteArrow/>
        <View style={styles.Profile}>
          <View style={styles.Person}>
            <Image          
              source={require('../../../assets/ProfilePictureJoao.png')}
              style={styles.ProfilePicture}
              size={80}
            />
            <View style={styles.Greetings}>
              <Text style={[styles.Text, {color: '#F7F7F7'}]}>Bem vindo de volta,</Text>
              <Text style={styles.Name}>João Lacerda</Text>
            </View>
          </View>
          <ProfileInfo projetos={'15'} seguidores={'23k'} seguindo={'345'}></ProfileInfo>
        </View>
      </View>
      <View style={styles.MainContainer}>
        <RoundedCard rating={'4.5'} ></RoundedCard>
      </View>
    </View>
  );
}
