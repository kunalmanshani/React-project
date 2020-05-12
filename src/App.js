import React, {Component} from 'react';
import {View } from 'react-native';
import firebase from 'firebase';
import  { Header } from './components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
    UNSAFE_componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyBboeE2LC1ZSiEUpiFGfWG-XSVjhi2dXQQ",
            authDomain: "authentication-484fa.firebaseapp.com",
            databaseURL: "https://authentication-484fa.firebaseio.com",
            projectId: "authentication-484fa",
            storageBucket: "authentication-484fa.appspot.com",
            messagingSenderId: "189342040080",
            appId: "1:189342040080:web:b4ece55fa6d04c43a28a95",
            measurementId: "G-LHKKDW005W"
          });
        
    }
    render(){
        return (
            <View>
                <Header headerText = "Authentication" />
                <LoginForm />
            </View>
        );
    }
}
export default App;
