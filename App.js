import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Vibration } from "react-native";
import React, { useState } from "react";
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';


import Button from './components/Button';
import LargeButton from './components/LargeButton';
import DeleteButton from './components/DeleteButton';

export default function App() {
    const [text, setText] = useState("_");
    const speechOptions = { rate: 0.6 };

    var newState;

    const changeText = (letterToAdd) => {
        if (text.length > 33) {
 
            newState = "" + letterToAdd + "_";
        }
        else {
            newState = text + letterToAdd;
            newState = newState.replace("_", "");
            newState += "_";
        }
        setText(newState);
    }

    function addSpace()
    {
        Vibration.vibrate(125);
        
        if (text.length > 33) {
            newState = "" + " ";
        }
        else {
            newState = text + " ";
            newState = newState.replace("_", "");
            Speech.stop();
            Speech.speak(newState, speechOptions);
            newState += "_";
        }
        setText(newState);
    }

    function deleteCharacter() {
        Vibration.vibrate(125);
        if (text.length > 0)
        {
            Speech.stop();
            Speech.speak("Delete", speechOptions);
            
            newState = text.substring(0, text.length-2);
            newState += "_";
            setText(newState);
        }

    }


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            </View>

            <Text style={styles.titleText} id="textElement">
                {text}
            </Text>

            <View style={styles.letterContainer}>
                <Button label="A" changeText={changeText} />
                <Button label="B" changeText={changeText} />
                <Button label="C" changeText={changeText} />
                <Button label="D" changeText={changeText} />
                <Button label="E" changeText={changeText} />
                <Button label="F" changeText={changeText} />
                <Button label="G" changeText={changeText} />
                <Button label="H" changeText={changeText} />
                <Button label="I" changeText={changeText} />
                <Button label="J" changeText={changeText} />
                <Button label="K" changeText={changeText} />
                <Button label="L" changeText={changeText} />
                <Button label="M" changeText={changeText} />
                <Button label="N" changeText={changeText} />
                <Button label="O" changeText={changeText} />
                <Button label="P" changeText={changeText} />
                <Button label="Q" changeText={changeText} />
                <Button label="R" changeText={changeText} />
                <Button label="S" changeText={changeText} />
                <Button label="T" changeText={changeText} />
                <Button label="U" changeText={changeText} />
                <Button label="V" changeText={changeText} />
                <Button label="W" changeText={changeText} />
                <Button label="X" changeText={changeText} />
                <Button label="Y" changeText={changeText} />
                <Button label="Z" changeText={changeText} />
                <LargeButton label="Space" changeText={addSpace} />
                <DeleteButton label="Delete" changeText={deleteCharacter}  />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'black',
        alignItems: 'start',
    },
    innerContainer: {
        backgroundColor: 'black',
        alignItems: 'start',

    },

    letterContainer: { // Container that controls the items
        width: 430,
        flexDirection: 'row', // Align children from left to right
        flexWrap: 'wrap',
        paddingLeft: 10,
        alignItems: 'start', // Align children to the start of the container's cross axis
        paddingTop: 5
    },

    titleText: {
        height: 350,
        width: 420,
        fontSize: 65,
        fontWeight: 'bold',
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: "white",
        alignItems: 'center',
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 15,
    }
});
