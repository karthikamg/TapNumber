import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import styles from './style';

export default class ProgressBar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isTimeOut: false,
            count: Dimensions.get('window').width
        }
    }
  
    componentDidMount() {
        setInterval(() => {
            this.setState({count: this.state.count - 13})
        }, 500)
    }
  
    render() {
        return (
            <Text style={[styles.progressBar, {width: this.state.count}]}></Text>
        )
    }
}