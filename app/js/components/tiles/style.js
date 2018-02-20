import { StyleSheet } from 'react-native';

import { white } from '../../helpers/commonConstants';

export default StyleSheet.create({
    customTile: {
        borderRadius: 5
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: 75,
        width: 75
    },
    tileText: {
        color: white,
        fontWeight: 'bold',
        fontSize: 42,
        alignItems: 'center',
        padding: 8
    }
});