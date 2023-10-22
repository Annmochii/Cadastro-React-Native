import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { Link } from '@react-navigation/native';
import { DefaultButton } from '../../components/DefaultButton';
import { InputText } from '../../components/InputText';
import { InputKey } from '../../components/InputKey';
import { Checkbox } from '../../components/Checkbox';
import { NavBar } from '../../components/NavBar/index';
import styles from './styles'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

export default function SignInPage() {

  const { signIn } = useContext ( AuthContext );

  const [email, setEmail, password, setPassword] = React.useState("");

  const [loaded] = useFonts({
    PoppinsMedium: require('../../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('../../../assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('../../../assets/fonts/MerriweatherSans-Regular.ttf'),
  });

  var options=[
    {text:'', id:1},
  ]

  function handlePress(){
    // Pegar as informações de email e senha e dar um console.log
    console.log({
      email, password
    })
  }

  return (
    <View style={styles.FullProject}>
      <NavBar style={styles.Nav}></NavBar>
      <View style={styles.MainContainer}>
        <View style={styles.Hero}>
          <Text style={styles.Title}>Entre</Text>
          <View style={styles.Link}>
            <Text style={styles.Text}>Novo por aqui? </Text>
              <Text style={styles.Hiperlink}><Link to={{ screen: 'SignUp' }}>Registre-se aqui</Link></Text>
          </View>
        </View>
        <View style={styles.Container}>
          <InputText label='Endereço de E-mail:' placeholder='seuemail@exemplo.com' onChangeText={setEmail} value={email}></InputText>
          <InputKey label='Senha:' placeholder='Digite sua senha' secure={true} onChangeText={setPassword} value={password}></InputKey>
          <View style={styles.Forgot}>
            <Text style={styles.Hiperlink}><Link to={{ screen: 'ForgotPassword' }}>Esqueci minha senha</Link></Text> 
          </View>
        </View>
        <DefaultButton valor='Próximo' onPress={() => signIn()}></DefaultButton>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
