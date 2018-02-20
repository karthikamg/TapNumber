import React, {Component} from 'react';
import {
    View,
    Button,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import styles from './style';

export default class ButtonCom extends Component {
    constructor (props) {
        super(props);
        this.state = {
            buttonText: '',
            buttonIcon: ''
        }
    }

    componentDidMount() {
        let buttonId = this.props.id;
        switch (buttonId)  {
            case 0: 
                this.setState({buttonText: 'Start', buttonIcon: require('../../../img/play-white.png')});
                break;
        }
    }

    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    render () {
        return (
            <TouchableOpacity style={styles.customBtn}>
                <Text style={styles.btnText}>{this.state.buttonText}</Text>
                <Image style={styles.btnIcon} source={this.state.buttonIcon}/>
            </TouchableOpacity>
        );
    }
}