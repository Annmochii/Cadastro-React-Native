import { StyleSheet, Text, View } from 'react-native';

export default function RoundedCard(props){
    const styles = StyleSheet.create({
        RoundedCard:{
            width: '100%',
            height: props.height??'92px',
            borderRadius: 28,
            backgroundColor: '#F7F7F7'
        },
        Title: {
            fontFamily: 'PoppinsBold',
            fontSize: '16px',
            color: '#26262B',
        },
        Text: {
            fontFamily: 'MerriweatherLight',
            color: '#625C6F',
        },
        Rating: {
            fontFamily: 'PoppinsBold',
            fontSize: '14px',
            color: '#FABE7B',
        }
    })

    return (
        <View style={styles.RoundedCard}>
            <View style={styles.LeftContainer}>
                <Text style={styles.Title}>{props.Title}</Text>
                <Text style={styles.Coop}>c/ {props.Coop}</Text>
            </View>
            <View style={RightContainer}>
                <Text style={styles.Rating}>{props.rating}</Text>
                <Icon 
                    name={'star'}
                    color={'#FABE7B'}
                    size={17}
                /> 
                <Image src={props.CoopImage} style={styles.Picture} />
            </View>
        </View>
    )
}