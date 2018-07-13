import React, { Component } from 'react';

import {Text, View, TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native';

import {styles} from "../styles/login_style";


export default class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            id: '',
        }
    }
    static navigationOptions =
        {
            title: 'Home',
            header: null,
            headerLeft: null,
        };


    Action()
    {
        var username = this.state.username;
        var password = this.state.password;
        var id = this.state.id;

        var gotoPractice = this.props.navigation;

        var xhttp = new XMLHttpRequest();
        xhttp.open('POST', 'https://prelive.identalsoft.com:8447/iDental/mobile/_getListPractice', true);
        //cau hinh header cho request
        xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhttp.setRequestHeader('Accept', 'application/json');

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                practice = [];
                var obj = JSON.parse(this.responseText);

                if(obj.code == 0) {

                    for(var i = 0; i < obj.responseObject.length; i++)
                    {
                        practice[i] = new Practice(obj.responseObject[i]);
                    }
                    gotoPractice.navigate('Practice');
                }
                else
                {
                    alert('Invalid input!');
                }
            }
        };

        var data = {"userName": 'admin',
            "password": '12',
            "customerId": 30003350
        }

        xhttp.send(JSON.stringify(data));
    }

    render()
    {
        return(
            <ImageBackground source={require('../img/login_bg.jpg')} style={styles.backgroundImage}>
                <View style = {styles.container}>

                    <View style = {styles.textcontainer}>
                        <Text style = {{fontSize: 40, color: "#ffffff"}}>
                            EnviAPP
                        </Text>
                    </View>

                    <TextInput
                        placeholder = 'Username'
                        style = {styles.textInput}
                        underlineColorAndroid = {'transparent'}
                        onChangeText={(text) => this.setState({username: text})}
                    />


                    <TextInput
                        placeholder = 'Password'
                        secureTextEntry={true}
                        style = {styles.textInput}
                        underlineColorAndroid = {'transparent'}
                        onChangeText={(password) => this.setState({password: password})}
                    />

                    <TouchableOpacity
                        style = {styles.button}
                        onPress= {this.Action.bind(this)}>

                        <Text style = {styles.btntext}> Login </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        );
    }
}
