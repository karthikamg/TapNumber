import { StyleSheet } from 'react-native';

import { white } from '../../helpers/commonConstants';

export default StyleSheet.create({
    customBtn: {
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderRadius: 25,
        borderColor: white,
        flexDirection: 'row',
        marginTop: 40
    },
    btnText: {
        color: white,
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
        width: 10,
        height: 10
    }
});