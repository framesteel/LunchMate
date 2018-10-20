import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');

export default class RestuarantCard extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.Header}>{this.props.title}</Text>
            </View>
    )
    };
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height/6,
        backgroundColor: 'white',
        alignItems: 'stretch',
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
