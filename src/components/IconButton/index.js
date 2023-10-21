import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';

export function IconButton(props){
    const styles = StyleSheet.create({
        DefaultButton: {
            flexDirection: 'row',
            gap: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F86041',
            borderRadius: '30px',
            border: 'none',
            paddingBlock: props.paddingBlock??"12px",
            paddingInline: props.paddingInline??"32px",
            height: 36,
        },
        TextButton: {
            color: '#F7F7F7',
            fontSize: '14px',
            fontFamily: 'PoppinsMedium',
        },
    });
    
    return (
        <TouchableOpacity style={styles.DefaultButton} onPress={props.onPress}>
            <Icon 
                name={'person' }
                color={'#F7F7F7'}
                size={17}
            />
            <Text style={styles.TextButton}>{props.valor}</Text>
            </TouchableOpacity>
    )
}


