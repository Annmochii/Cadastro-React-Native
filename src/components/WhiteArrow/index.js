import { StyleSheet, View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { IconButton } from '../IconButton/index';

export function WhiteArrow(props){
    const styles = StyleSheet.create({
      MainContainer: {
        paddingInline: '1rem',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      Arrow: {
        width: 36,
        height: 36,
        color: '#fff',
      },
    });
    
    return (
      <View style={styles.MainContainer}>
        <Image 
          source={require('../../../assets/arrow_back_white.png')}
          style={styles.Arrow}
          color={'#fff'}
          size={36}
        />
        <IconButton valor="Editar Perfil" name={'edit'} border={1} paddingBlock={8} paddingInline={12}/>
      </View>
    )
}