import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    BackHandler,
    Image,
    AsyncStorage
} from 'react-native';

import styles from './style';
import commonStyles from '../../helpers/commonStyles';

import { darkCream, white, highestScore, home } from '../../helpers/commonConstants';

export default class HighestScorePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            scoreToDisplay : 0
        };
    }

    componentDidMount () {
        BackHandler.addEventListener("hardwareBackPress", (e) => {
            this.props.navigation.navigate(home);
            return true;
        });
        AsyncStorage.getItem('score').then(score => {
            this.setState({scoreToDisplay: score});
        });
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
                <Text style={commonStyles.headerTitle}>Score: {this.state.scoreToDisplay}</Text>
            </View>
        );
    }
}