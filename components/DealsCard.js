//This screem will nav to the deals screen
import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, Modal, } from 'react-native';



var {height, width} = Dimensions.get('window');

export default class DealsCard extends React.Component {


    render() {
        return(
            <View style={styles.container}>
                    <Text style={styles.Header}>{this.props.info}</Text>
            </View>
    )
    };
}

const styles = StyleSheet.create({
    container: {
        width: width * .95,
        height: height/6.85,
        borderRadius: 20,
        borderColor: '#C0C0C0',
        backgroundColor: '#F0E9B6',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,
        marginTop: 4,
        textAlign: 'center',
        //borderBottomColor: '#C0C0C0',
        //borderBottomWidth: 1.35,
        borderWidth: 1.35
    },
    Header: {
        textAlign: 'center',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'serif',
        color: '#391B2A',
    }
});
