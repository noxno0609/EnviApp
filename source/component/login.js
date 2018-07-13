import React, { Component } from 'react';
import {Text, View, TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native';
import {styles} from "./styles/login_style";
import {displayName as appName} from '../../app.json';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputUserName: '',
            inputPassword: ''
        }
    }

    _onLoginPress()
    {

    }

    render()
    {
        return(
            <ImageBackground source={require('./img/login_bg.jpg')} style={styles.backgroundImage}>
                <View style = {styles.container}>

                    <View style = {{backgroundColor: 'white', width: '100%', paddingBottom: 15}}>
                        <Text style = {{fontSize: 30, color: "gray", textAlign: 'center', padding: 20}}>{appName}</Text>

                        <FormLabel>Username</FormLabel>
                        <FormInput
                            onChangeText={(text) => this.setState({inputUserName: text})}
                        />

                        <FormLabel>Password</FormLabel>
                        <FormInput
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({inputPassword: password})}
                        />
                    </View>

                    <Button
                        rightIcon={{name: 'cached'}}
                        title='LOGIN'
                        backgroundColor = '#00b386'
                        containerViewStyle={{width: '100%' }}
                        onPress= {this._onLoginPress} />
                </View>
            </ImageBackground>
        );
    }
}
