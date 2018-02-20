import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import commonStyles from '../../helpers/commonStyles';
import { dropDownData, saffron, black, highestScore, level, help } from '../../helpers/commonConstants';
import styles from './style';

import ButtonCom from '../../components/button';
import TileCom from '../../components/tiles';

let staticTileNumber = '7';

export default class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedBgColor: 'transparent'
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
    }

    static navigationOptions = ({ navigation }) => ({
        title: '',
        headerLeft: null,
        headerStyle: {
            backgroundColor: saffron,
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
        return (
            <View style={commonStyles.container}>
                <Text style={styles.homeTitle}>Tap Numbers</Text>
                <TileCom titleNumber={staticTileNumber} />
                <ButtonCom id={0}/>
            </View>
        );
    }
}