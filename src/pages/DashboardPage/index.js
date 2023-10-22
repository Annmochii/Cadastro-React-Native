import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { WhiteArrow } from '../../components/WhiteArrow/index.js';
import { RoundedCard } from '../../components/RoundedCard/index.js';
import { ProfileInfo } from '../../components/ProfileInfo/index.js';
import { NavBottom } from '../../components/NavBottom/index.js';
import styles from './styles';

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
        <RoundedCard 
          title={'Tela de Cadastro'} 
          coop={'Bianca Brumatti'} 
          rating={'4.5'} 
          coopImage={require('../../../assets/ProfilePictureBianca.png')} 
        />
        <RoundedCard 
          title={'Portifólio'} 
          coop={'Caio Braga'} 
          rating={'4'} 
          coopImage={require('../../../assets/ProfilePictureCaio.png')} 
        />
        <RoundedCard 
          title={'Catálogo de Filmes'} 
          coop={'Giselle Souza'} 
          rating={'5'} 
          coopImage={require('../../../assets/ProfilePictureGiselle.png')} 
        />
        <RoundedCard 
          title={'Tela de Login'} 
          coop={'Bianca Brumatti'} 
          rating={'5'} 
          coopImage={require('../../../assets/ProfilePictureBianca.png')} 
        />
        <RoundedCard 
          title={'Instagram'} 
          coop={'Caio Braga'} 
          rating={'5'} 
          coopImage={require('../../../assets/ProfilePictureCaio.png')} 
        />
        <RoundedCard 
          title={'Catálogo de Livros'} 
          coop={'Giselle Souza'} 
          rating={'3.5'} 
          coopImage={require('../../../assets/ProfilePictureGiselle.png')} 
        />
        <RoundedCard 
          title={'Aplicativo de Banco'} 
          coop={'Bianca Brumatti'} 
          rating={'4'} 
          coopImage={require('../../../assets/ProfilePictureBianca.png')} 
        />
        <RoundedCard 
          title={'Logomarca'} 
          coop={'Caio Braga'} 
          rating={'4.5'} 
          coopImage={require('../../../assets/ProfilePictureCaio.png')} 
        />
        <RoundedCard 
          title={'Twitter'} 
          coop={'Giselle Souza'} 
          rating={'5'} 
          coopImage={require('../../../assets/ProfilePictureGiselle.png')} 
        />
      </View>
    <NavBottom style={[{position: 'fixed'}, {bottom: 0}]} />
    </View>
  );
}
