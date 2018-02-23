import React, {Component} from 'react';
import {
    View,
    Text,
    BackHandler,
    TouchableOpacity,
    Image
} from 'react-native';

import styles from './style';
import commonStyles from '../../helpers/commonStyles';
import { home, darkCream, white, help } from '../../helpers/commonConstants';

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
                    <Text style={commonStyles.headerTitle}>{help}</Text>
                </TouchableOpacity>
            </View>
    });

    render () {
        return (
            <View style={commonStyles.container}>
                <Text>Help</Text>
            </View>
        );
    }
}