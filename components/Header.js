import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Header extends React.Component {
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
        flex: 1.25,
        width: width,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Header: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        fontSize: 30,
        fontFamily: 'serif',
        color: 'green',
    }
});
