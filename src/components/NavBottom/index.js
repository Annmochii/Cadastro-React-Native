import { StyleSheet, Text, View, Image } from 'react-native';

export function NavBottom(props){
  const styles = StyleSheet.create({
  })

  return (
    <View style={styles.NavBottom}>
    <Image 
        source={require('../../../assets/ProfilePictureBianca.png')} 
        style={styles.Icon} 
        size={60}
    />
    </View>
  )
}