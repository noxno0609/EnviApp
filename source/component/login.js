import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Test</Text>
                <Text style={styles.text}>Test</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 65,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});