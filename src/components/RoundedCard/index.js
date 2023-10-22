import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export function RoundedCard(props){
    const styles = StyleSheet.create({
        RoundedCard:{
            width: '100%',
            height: 92,
            borderRadius: 28,
            backgroundColor: '#F7F7F7',
            paddingInline: 24,
            paddingBlock: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        LeftContainer: {
            flexDirection: 'column',
            justifyContent: 'start',
            gap: 0,
        },
        RightContainer: {
            gap: 8,
            flexDirection: 'row',
        },
        Rating: {
            gap: 4,
            flexDirection: 'row',
            alignItems:'center',
        },
        Title: {
            fontFamily: 'PoppinsBold',
            fontSize: '16px',
            color: '#26262B',
        },
        Coop: {
            fontFamily: 'MerriweatherRegular ',
            color: '#625C6F',
        },
        NumberRating: {
            fontFamily: 'PoppinsBold',
            fontSize: '14px',
            color: '#FABE7B',
        },
        Picture: {
            width: 60,
            height: 60,
        }
    })

    return (
        <View style={styles.RoundedCard}>
            <View style={styles.LeftContainer}>
                <Text style={styles.Title}>{props.title}</Text>
                <Text style={styles.Coop}>c/ {props.coop}</Text>
            </View>
            <View style={styles.RightContainer}>
                <View style={styles.Rating}>
                    <Text style={styles.NumberRating}>{props.rating}</Text>
                    <Icon 
                        name={'star'}
                        color={'#FABE7B'}
                        size={32}
                    />
                </View>
                <Image 
                    source={props.coopImage} 
                    style={styles.Picture} 
                    size={60}
                />
            </View>
        </View>
    )
}