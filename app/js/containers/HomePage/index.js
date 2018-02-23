import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    BackHandler
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import LinearGradient from 'react-native-linear-gradient';

import commonStyles from '../../helpers/commonStyles';
import { dropDownData, black, highestScore, level, help, playGame, darkCream, midCream } from '../../helpers/commonConstants';
import styles from './style';

import ButtonCom from '../../components/button';
import TileCom from '../../components/tiles';

let staticTileNumber = '67';

export default class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedBgColor: 'transparent',
            progress: 0
        }
    }

    componentDidMount () {
        handleSubMenuChange = (data) => {
            let modifiedData = data.trim().split(" ").join("");
            switch(modifiedData) {
                case highestScore: { 
                    this.props.navigation.navigate(highestScore);
                    break; 
                } 
                case level: {
                    this.props.navigation.navigate(level);
                    break; 
                } 
                case help: { 
                    this.props.navigation.navigate(help);
                    break; 
                }
                default: { 
                    break; 
                } 
            }
        }
        BackHandler.addEventListener("hardwareBackPress", (e) => {
            BackHandler.exitApp();
        })
    }

    onStartButtonPress = () => {
        this.props.navigation.navigate(playGame);
    }

    static navigationOptions = ({ navigation }) => ({
        title: '',
        headerLeft: null,
        headerStyle: {
            backgroundColor: darkCream,
            elevation: 0,
            padding: 15
        },
        headerRight:
                <Dropdown
                    data={dropDownData}
                    renderBase={() => ( <Image style={commonStyles.imgButton} source={require('../../../img/menu-vertical-white.png')}/> )}
                    rippleInsets={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    dropdownPosition={1}
                    itemColor={black}
                    onChangeText={(value, index, data) => {this.handleSubMenuChange(data[index].value);}}
                    animationDuration={1}
                    pickerStyle={{
                        width: 150,
                        left: null,
                        right: 0
                    }}
                />
    });

    render () {
        setTimeout((function() {
            this.setState({ progress: this.state.progress + (0.4 * Math.random())});
        }).bind(this), 1000);
        return (
            <LinearGradient colors={[darkCream, midCream]} style={[styles.linearGradient, commonStyles.container]}>                   
                <Text style={styles.homeTitle}>Tap Numbers</Text>
                {/* <TileCom titleNumber={staticTileNumber} titleIcon={'happy-emoji'} /> */}
                <ButtonCom id={0} onStartButtonPress = { this.onStartButtonPress }/>
            </LinearGradient>
        );
    }
}