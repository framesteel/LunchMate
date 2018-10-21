import React from 'react'
import { Icon } from 'react-native-elements';

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
        backgroundColor: '#937592',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        //borderBottomEndRadius: 80
    },
    Header: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        fontSize: 30,
        fontFamily: 'serif',
        color: 'white',
    }
});
