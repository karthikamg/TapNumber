import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Dimensions,
    FlatList,
    AsyncStorage
} from 'react-native';

import styles from './style';
import commonStyles from '../../helpers/commonStyles';
import TileCom from '../../components/tiles';
import ProgressBar from '../../components/progressBar';

export default class PlayGamePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isTimeOut: false,
            minNumber: -100,
            maxNumber: 100,
            numberList: [],
            score: '',
            randomIcons: ['normal-emoji', 'happy-emoji', 'surprised-emoji']
        }
    }

    componentDidMount () {
        let randomNumberListGenerated = [],
            numArrObj = {},
            j = -1,
            iconListLength = 3;
        setTimeout(() => {
            this.setState({isTimeOut: true});
            AsyncStorage.getItem('score').then(list => {
                this.setState({score: list});
            });
        }, 15000);
        for(let i = 0; i< 18; i++) {
            let obj = {};
            j =  j + 1;
            obj['id'] = this.randomNumber();
            if( j == 3)
                j = 0;
            // let icon = this.state.randomIcons[Math.floor(Math.random() * iconListLength-j)];
            let icon = Math.floor(Math.random() * iconListLength-j);
            obj['iconKey'] =  icon < 0 ? 0 : icon;
            randomNumberListGenerated.push(obj);
        }
        this.setState({numberList: randomNumberListGenerated});
        // for(j = 0; j < 6; j++) {
        //     let numberSetArr = [];
        //     for(i = 0; i < 3; i++) {
        //         let key = (Math.random() * 19).toFixed(0);
        //         if(randomNumberListGenerated[key] !== undefined) {
        //             numberSetArr.push(randomNumberListGenerated[key]["id"]);
        //         } else {
        //             let key = (Math.random() * 19).toFixed(0);
        //             numberSetArr.push(randomNumberListGenerated[key]["id"]);
        //         }
        //     }
        //     numArrObj[j] = numberSetArr;
        // }
    }

    randomNumber = () => {
        return (Math.random() * 100).toFixed(0);
    }
    
    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    renderFlatListItem({item}) {
        return (
            <TileCom titleNumber={item.id} titleIconKey={item.iconKey} />
        );
    };

    render () {
        return (
            <View style={commonStyles.container}>
                { !this.state.isTimeOut && <ProgressBar />}
                { !this.state.isTimeOut && 
                    <View>
                        <FlatList
                            keyExtractor={(item, index) => index}
                            renderItem={this.renderFlatListItem}
                            data={this.state.numberList}
                            horizontal={false}
                            numColumns={3}
                            style={{marginTop: 15}}>
                        </FlatList>
                    </View>
                }
                { this.state.isTimeOut && 
                    <View>
                        <Text style={styles.gameOverText}>Game over !!!!</Text>
                        <Text style={styles.scoreText}>{this.state.score}</Text>
                    </View>
                }
            </View>
        );
    }
}