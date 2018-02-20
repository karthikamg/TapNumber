import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './style';
import commonStyles from '../../helpers/commonStyles';

import { saffron, white } from '../../helpers/commonConstants';

export default class HighestScorePage extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Highest score',
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
                <Text>Highest Score</Text>
            </View>
        );
    }
}