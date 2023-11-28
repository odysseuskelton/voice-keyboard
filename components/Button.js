import * as React from 'react';
import { StyleSheet, View, Pressable, Text} from 'react-native';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';



export default function Button({ label, changeText }) {
    const [sound, setSound] = React.useState();
    var chosenLetter;

    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
    };

    async function buttonPressed(letter) {
        changeText(letter.label);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        playSound(letter);
    }


    async function playSound(letter) {
        console.log('Loading Sound');

        var a = require('../assets/alphabet/a.wav');
        var b = require('../assets/alphabet/b.wav'); 
        var c = require('../assets/alphabet/c.wav'); 
        var d = require('../assets/alphabet/d.wav'); 
        var e = require('../assets/alphabet/e.wav'); 
        var f = require('../assets/alphabet/f.wav'); 
        var g = require('../assets/alphabet/g.wav'); 
        var h = require('../assets/alphabet/h.wav'); 
        var i = require('../assets/alphabet/i.wav'); 
        var j = require('../assets/alphabet/j.wav'); 
        var k = require('../assets/alphabet/k.wav'); 
        var l = require('../assets/alphabet/l.wav'); 
        var m = require('../assets/alphabet/m.wav'); 
        var n = require('../assets/alphabet/n.wav'); 
        var o = require('../assets/alphabet/o.wav'); 
        var p = require('../assets/alphabet/p.wav'); 
        var q = require('../assets/alphabet/q.wav'); 
        var r = require('../assets/alphabet/r.wav'); 
        var s = require('../assets/alphabet/s.wav'); 
        var t = require('../assets/alphabet/t.wav'); 
        var u = require('../assets/alphabet/u.wav'); 
        var v = require('../assets/alphabet/v.wav'); 
        var w = require('../assets/alphabet/w.wav'); 
        var x = require('../assets/alphabet/x.wav'); 
        var y = require('../assets/alphabet/y.wav'); 
        var z = require('../assets/alphabet/z.wav'); 

        switch (letter.label) {
            case 'A':
                chosenLetter = a;
                this.set
                break;
            case 'B':
                chosenLetter = b;
                break;
            case 'C':
                chosenLetter = c;
                break;
            case 'D':
                chosenLetter = d;
                break;
            case 'E':
                chosenLetter = e;
                break;
            case 'F':
                chosenLetter = f;
                break;
            case 'G':
                chosenLetter = g;
                break;
            case 'H':
                chosenLetter = h;
                break;
            case 'I':
                chosenLetter = i;
                break;
            case 'J':
                chosenLetter = j;
                break;
            case 'K':
                chosenLetter = k;
                break;
            case 'L':
                chosenLetter = l;
                break;
            case 'M':
                chosenLetter = m;
                break;
            case 'N':
                chosenLetter = n;
                break;
            case 'O':
                chosenLetter = o;
                break;
            case 'P':
                chosenLetter = p;
                break;
            case 'Q':
                chosenLetter = q;
                break;
            case 'R':
                chosenLetter = r;
                break;
            case 'S':
                chosenLetter = s;
                break;
            case 'T':
                chosenLetter = t;
                break;
            case 'U':
                chosenLetter = u;
                break;
            case 'V':
                chosenLetter = v;
                break;
            case 'W':
                chosenLetter = w;
                break;
            case 'X':
                chosenLetter = x;
                break;
            case 'Y':
                chosenLetter = y;
                break;
            case 'Z':
                chosenLetter = z;
                break;

        }



        const { sound } = await Audio.Sound.createAsync(chosenLetter);
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    function getString()
    {
        return '../assets/alphabet/a.wav';
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
        width: 68,
        height: 68,
        marginHorizontal: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: 'blue',
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
        fontSize: 47,
        fontWeight: "900",
    },
});


/* Ipad settings       width: 150,
        height: 150,

        fontWeight: "700",*/