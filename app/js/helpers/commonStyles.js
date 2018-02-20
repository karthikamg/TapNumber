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
    },
    chatheaderLeft: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row'
      },
      backBtn: {
        width: 22,
        height: 20,
        marginLeft: 15,
        marginRight: 10,
        marginTop: 20
      },
      headerTitle: {
        paddingLeft: 10,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 18
      }
});