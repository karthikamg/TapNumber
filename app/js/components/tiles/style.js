import { StyleSheet } from 'react-native';

import { white } from '../../helpers/commonConstants';

export default StyleSheet.create({
    customTile: {
        borderRadius: 5,
        alignItems: 'center'
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: 50,
        width: 80,
        margin: 8,
        marginTop: 15
    },
    tileText: {
        color: white,
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        padding: 8
    }
});