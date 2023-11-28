import * as React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';




export default function DeleteButton({ label, changeText }) {
    const [sound, setSound] = React.useState();

    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
    };

    async function buttonPressed(letter) {
        changeText(letter.label);
    }

    async function addToTextString() {
        
    }


    async function playSound(letter) {
        console.log('Loading Sound');

        var a = require('../assets/alphabet/a.wav');


        switch (letter.label) {
            case 'A':
                chosenLetter = a;
                this.set
                break;
        }



        const { sound } = await Audio.Sound.createAsync(chosenLetter);
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }



    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);



    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={(event) => buttonPressed({label})}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        width: 146,
        height: 65,
        marginHorizontal: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: 'red',
        borderRadius: 10,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 45,
        fontWeight: "900",
    },
});


/* Ipad settings       width: 150,
        height: 150,

        fontWeight: "700",*/