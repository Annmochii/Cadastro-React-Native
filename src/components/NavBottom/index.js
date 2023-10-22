import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export function NavBottom(props){
  const styles = StyleSheet.create({
    NavBottom:{
      backgroundColor: '#F7F7F7',
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24,
      width: '100%',
      height: 76,
      flexDirection: 'row',
      paddingTop: 12,
      paddingBottom: 16,
      paddingInline: 52,
      justifyContent: 'space-between',
    },
  })

  return (
    <View style={styles.NavBottom}>
      <Icon
        name={'home'}
        color={'#F86041'}
        size={32}
      />
      <Icon
        name={'chat'}
        color={'#625C6F'}
        size={32}
      />
      <Icon
        name={'settings'}
        color={'#625C6F'}
        size={32}
      />
    </View>
  )
}