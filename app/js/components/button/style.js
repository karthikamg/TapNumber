import { StyleSheet } from 'react-native';

import { darkBrown } from '../../helpers/commonConstants';

export default StyleSheet.create({
    customBtn: {
        borderWidth: 2,
        backgroundColor: 'transparent',
        borderRadius: 25,
        borderColor: darkBrown,
        flexDirection: 'row',
        marginTop: 40
    },
    btnText: {
        color: darkBrown,
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnIcon: {
        padding: 25,
        width: 5,
        height: 5
    }
});