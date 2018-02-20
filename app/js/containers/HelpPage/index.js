import React, {Component} from 'react';
import {
    View,
    Text,
    BackHandler
} from 'react-native';

import styles from './style';
import commonStyles from '../../helpers/commonStyles';
import { home, saffron, white } from '../../helpers/commonConstants';

export default class HelpPage extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        BackHandler.addEventListener("hardwareBackPress", (e) => {
            this.props.navigation.navigate(home);
            return true;
        })
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Help',
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
                <Text>Help</Text>
            </View>
        );
    }
}