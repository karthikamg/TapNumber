import { StyleSheet } from 'react-native';

import { darkCream, darkBrown } from '../../helpers/commonConstants';

export default StyleSheet.create({
    gameOverText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: darkBrown,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 120,
        paddingBottom: 20
    },
    scoreText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: darkBrown,
        justifyContent: 'center',
        alignItems: 'center',
    }
});