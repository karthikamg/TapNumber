import { StyleSheet } from 'react-native';

import { darkCream, darkBrown } from '../../helpers/commonConstants';

export default StyleSheet.create({
    homeTitle: {
        fontSize: 45,
        fontWeight: 'bold',
        color: darkBrown,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 120,
        paddingBottom: 20
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    }
});