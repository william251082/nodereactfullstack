import React from 'react';
import ReactDOM from 'react-dom'
import App from "./components/App";
import {BrowserRouter, Route} from "react-router-dom";
import Welcome from "./components/Welcome";
import Feature from "./components/Feature";
import Signup from "./components/auth/Signup";
import Signout from "./components/auth/Signout";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from './reducers'
import reduxThunk from 'redux-thunk';
import Signin from "./components/auth/Signin";

const store = createStore(reducers, {
    auth: { authenticated: localStorage.getItem('item') }
}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/feature" component={Feature}/>
                <Route path="/signout" component={Signout}/>
                <Route path="/signin" component={Signin}/>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
