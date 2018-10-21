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
        width: width,
        height: height/6,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
    },
    Header: {
        fontSize: 30,
        fontFamily: 'serif',
        color: 'green',
    }
});
