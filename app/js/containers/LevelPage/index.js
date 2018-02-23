import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    BackHandler,
    Image
} from 'react-native';

import styles from './style';
import commonStyles from '../../helpers/commonStyles';

import { darkCream, white, level, home } from '../../helpers/commonConstants';

export default class LevelPage extends Component {
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
                    <Text style={commonStyles.headerTitle}>{level}</Text>
                </TouchableOpacity>
            </View>
    });

    render () {
        return (
            <View style={commonStyles.container}>
                <Text style={commonStyles.headerTitle}>Level</Text>
            </View>
        );
    }
}