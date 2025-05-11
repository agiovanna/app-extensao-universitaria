import React from "react";
import { Touchable, TouchableOpacity, View, Text } from "react-native";
import { Button } from "../../components/button";
import { StyleSheet } from "react-native";
import {NavBar} from "../../components/navBar";

export default function Home () {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Home</Text>
                <Button title={'Olá'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
