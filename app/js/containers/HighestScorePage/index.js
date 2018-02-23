import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    BackHandler
} from 'react-native';

import styles from './style';
import commonStyles from '../../helpers/commonStyles';

import { darkCream, white, highestScore, home } from '../../helpers/commonConstants';

export default class HighestScorePage extends Component {
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
        headerStyle: {
            backgroundColor: darkCream,
            elevation: 0
        },
        headerTitleStyle: {
            color: white
        },
        headerLeft: 
            <View style={commonStyles.chatheaderLeft}>
                <TouchableOpacity onPress={ () => { navigation.goBack() }} >
                    <Image style={commonStyles.backBtn} source={require('../../../img/back-arrow-white.png')} />
                </TouchableOpacity>
                <TouchableOpacity> 
                    <Text style={commonStyles.headerTitle}>{highestScore}</Text>
                </TouchableOpacity>
            </View>
    });

    render () {
        return (
            <View style={commonStyles.container}>
                <Text>Highest Score</Text>
            </View>
        );
    }
}