import { StyleSheet, Text, View } from 'react-native';

export default function ProfileInfo(props){
    const styles = StyleSheet.create({
        RoundedCard:{
            width: '100%',
            height: props.height??'120px',
            borderRadius: 28,
            backgroundColor: '#F7F7F7',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        Info: {
            width: 96,
            paddingInline: 6,
            height: 72,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        Data: {
            fontFamily: 'PoppinsBold',
            fontSize: '24px',
            color: '#26262B',
            textAlign: 'center',
            width: 47,
        },
        Desc: {
            fontFamily: 'PoppinsMedium',
            fontSize: '14px',
            color: '#26262B',
            width: 90,
            textAlign: 'center',
        }
    })

    return (
        <View style={styles.RoundedCard}>
            <View style={[styles.Info, {borderRightWidth: 2}, {borderRightColor: '#D9D9D9'}]}>
                <Text style={styles.Data}>{props.projetos}</Text>
                <Text style={styles.Desc}>projetos</Text>
            </View>
            <View style={[styles.Info, {borderRightWidth: 2}, {borderRightColor: '#D9D9D9'}]}>
                <Text style={styles.Data}>{props.seguidores}</Text>
                <Text style={styles.Desc}>seguidores</Text>
            </View>
            <View style={styles.Info}>
                <Text style={styles.Data}>{props.seguindo}</Text>
                <Text style={styles.Desc}>seguindo</Text>
            </View>
        </View>
    )
}