/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import {Header} from './src/common';

// Provider - works with a store - combines redux and react


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
        	<Provider store={createStore(reducers)}>
        		<Header headerText="Tech Stack"/>
	        </Provider>
        );
    }
}