import React, {Component} from 'react';
import {
    View,
    Button,
    TouchableOpacity,
    Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';
import { darkRed, midRed, mildRed } from '../../helpers/commonConstants';

export default class TileCom extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tileText: ''
        }
    }

    componentDidMount() {
        this.setState({tileText: this.props.titleNumber});
    }

    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    render () {
        return (
            <TouchableOpacity style={styles.customTile}>
                <LinearGradient colors={[darkRed, midRed, mildRed]} style={styles.linearGradient}>
                    <Text style={styles.tileText}>{this.state.tileText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}