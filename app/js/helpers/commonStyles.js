import { StyleSheet } from 'react-native';

import { skyBlue, saffron } from '../helpers/commonConstants';

export default StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        alignItems: 'center',
        backgroundColor: saffron
    },
    imgButton: {
        width: 20,
        height: 25
    },
    CircleShapeView: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor: skyBlue
    },    
    OvalShapeView: {
        marginTop: 20,
        width: 100,
        height: 100,
        backgroundColor: skyBlue,
        borderRadius: 50,
        transform: [
            {scaleX: 2}
        ]
    }
});