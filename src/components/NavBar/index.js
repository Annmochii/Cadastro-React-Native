import { StyleSheet, View, Image } from 'react-native';
import { IconButton } from '../IconButton/index';
import { Link, useNavigation } from '@react-navigation/native';
import Hamburguer from '../Hamburguer/index';

export function NavBar(){
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('SignIn');
  };

  const styles = StyleSheet.create({
    Container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingInline: '1rem',
      padding: 14,
      borderBottomWidth: 1,
      borderColor: '#D9D9D9',
    },
    LeftContainer:{
      flexDirection: 'row',
      alignItens: 'center',
      gap: 32,
    },
    Logo:{
      width: 36,
      height: 36,
      margin: 'auto',
      color: '#26262a',
    },
    Icon:{
      alignItens: 'center',
      marginBlock: 'auto',
    },
  });

  return(
    <View style={styles.Container}>
      <View style={styles.LeftContainer} >
        <Hamburguer style={styles.Icon} ></Hamburguer>
        <Link to={{ screen: 'Main' }}>
          <Image 
            source={require('../../../assets/Logo.png')} 
            style={styles.Logo} 
            size={36}
          />
        </Link>
      </View>
      <IconButton name={'person'} valor={'Login'} paddingBlock={8} paddingInline={18} onPress={handleLoginPress}/>
    </View>
  )
}