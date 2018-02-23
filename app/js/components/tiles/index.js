import React, {Component} from 'react';
import {
    View,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    Image,
    AsyncStorage,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';
import { darkRed, midRed, mildRed, skyBlue, white, thumbnails } from '../../helpers/commonConstants';

export default class TileCom extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tileText: '',
            tileIconKey: '',
            onTilePress: false
        }
    }

    componentDidMount() {
        this.setState({tileText: this.props.titleNumber, tileIconKey: this.props.titleIconKey});
        AsyncStorage.setItem('score', '0');
        AsyncStorage.setItem('sameIconCount', '1');
    }

    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    onTilePress = (value) => {
        this.setState({onTilePress: true});
        AsyncStorage.getItem('prevIcon').then(prevIcon => {
            if(prevIcon == value) {
                AsyncStorage.getItem('sameIconCount').then(sameIconCount => {
                    AsyncStorage.setItem('sameIconCount', JSON.stringify(parseInt(sameIconCount) + 1));
                    AsyncStorage.getItem('score').then(score => {
                        if(sameIconCount >= 3) {
                            AsyncStorage.setItem('score', JSON.stringify(parseInt(score) + 100));
                        }
                    })
                    AsyncStorage.setItem('sameIconCount', JSON.stringify(parseInt(sameIconCount) + 1));
                });
            } else {
                AsyncStorage.setItem('prevIcon', JSON.stringify(value));
                AsyncStorage.setItem('sameIconCount', '1');
            }
        });
        AsyncStorage.setItem('prevIcon', JSON.stringify(value));
    }

    render () {
        return (   
            <View>
                { !this.state.onTilePress &&
                    <LinearGradient colors={[darkRed, midRed, mildRed]} style={styles.linearGradient}>
                        <TouchableHighlight style={styles.customTile}>
                            <Text style={[styles.tileText, this.state.onTilePress ? {color: skyBlue} : {color: white}]} onPress={() => this.onTilePress(this.state.tileIconKey)}>{this.state.tileText}</Text>
                        </TouchableHighlight>
                    </LinearGradient>
                }
                { this.state.onTilePress &&
                    <LinearGradient colors={[mildRed, midRed, darkRed]} style={styles.linearGradient}>
                        <TouchableHighlight style={styles.customTile}>
                            <Image source={thumbnails[this.state.tileIconKey]} />
                        </TouchableHighlight>
                    </LinearGradient>
                }
            </View>
        );
    }
}