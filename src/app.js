import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

	state={ loggedIn: null };

componentWillMount() {
	firebase.initializeApp({
    apiKey: 'AIzaSyCn1L8aqYgbERInSWmPN74aO0DWyG1wnl4',
    authDomain: 'authfirebaseexample.firebaseapp.com',
    databaseURL: 'https://authfirebaseexample.firebaseio.com',
    projectId: 'authfirebaseexample',
    storageBucket: 'authfirebaseexample.appspot.com',
    messagingSenderId: '403680186147'
  });

firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
					this.setState({ loggedIn: false });
			}
		});
	}
renderContent() {
	switch (this.state.loggedIn) {
		case true:
	return <Button onPress={() => firebase.auth().signOut()}> Log out </Button>;

		case false:
	return <LoginForm />;

		default:
	return <Spinner size="large" />;

	}
}

render() {
		return (
			<View>
			<Header headerText="Authentication" />
			{this.renderContent()}
			</View>);
	}
}

export default App;
