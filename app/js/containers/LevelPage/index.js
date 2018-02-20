import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from './style';
import commonStyles from '../../helpers/commonStyles';

import { saffron, white, level } from '../../helpers/commonConstants';

export default class LevelPage extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
    }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: saffron,
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
                <Text>Level</Text>
            </View>
        );
    }
}