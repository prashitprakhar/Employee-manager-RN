import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './router';


class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        // Initialize Firebase
        const firebase = require('firebase');
        const config = {
            apiKey: "AIzaSyChtLGKyh4KnB30Jrn13VKjuiE9LZbFkmo",
            authDomain: "manager-a1efe.firebaseapp.com",
            databaseURL: "https://manager-a1efe.firebaseio.com",
            projectId: "manager-a1efe",
            storageBucket: "manager-a1efe.appspot.com",
            messagingSenderId: "107006556"
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}
/* <Header headerText='Managers App' />
                    <LoginForm />
                    </View> */
export default App;
