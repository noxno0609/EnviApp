import {StyleSheet} from "react-native";

const styles = StyleSheet.create(
    {
        wrapper:{
            flex: 1,
        },

        backgroundImage: {
            flex: 1,
            resizeMode: 'cover', // or 'stretch'
        },

        container: {
            flex: 1,
            padding: 20,
            width: null,
            justifyContent: 'center',
            alignItems: 'center',
        },

        textInput: {
            alignSelf: 'stretch',
            padding: 20,
            marginBottom: 20,
            fontSize: 17,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#3498db',
            backgroundColor: 'white',
        },

        button:{
            alignSelf: 'stretch',
            marginTop: 20,
            backgroundColor:'#3498db',
            alignItems:'center',
            padding: 20,
            borderRadius: 10,
            borderColor: '#3498db',
            borderWidth: 1,
        },

        btntext:{
            color: '#ffffff',
            fontSize: 20,
        },

        textcontainer:{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 50,
        },
    });

export {styles}