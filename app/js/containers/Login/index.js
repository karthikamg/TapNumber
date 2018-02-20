import React, {Component} from 'react';

import {View} from 'react-native';

export default class LoginPage extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount () {
        this.props.navigation.navigate('Home');
    }

    render () {
        return (<View></View>);
    }
}