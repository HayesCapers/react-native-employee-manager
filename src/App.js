import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

	componentWillMount() {
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyBUPI4970Bmkrddrs7tHoB2raF2h1NiciQ",
			authDomain: "manager-1e139.firebaseapp.com",
			databaseURL: "https://manager-1e139.firebaseio.com",
			projectId: "manager-1e139",
			storageBucket: "",
			messagingSenderId: "425265764884"
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

		return(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		)
	}
}

export default App;