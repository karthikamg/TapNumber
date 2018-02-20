import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './style';
import commonStyles from '../../helpers/commonStyles';

import { saffron, white } from '../../helpers/commonConstants';

export default class LevelPage extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Choose level',
        headerStyle: {
            backgroundColor: saffron,
            elevation: 0
        },
        headerTitleStyle: {
            color: white
        }
    });

    render () {
        return (
            <View style={commonStyles.container}>
                <Text>Level</Text>
            </View>
        );
    }
}