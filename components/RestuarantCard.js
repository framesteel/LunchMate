//This screem will nav to the deals screen
import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, Modal, } from 'react-native';



var {height, width} = Dimensions.get('window');

export default class RestuarantCard extends React.Component {

    _onPressButton = () => {
        console.log(this.props)
        this.props.navigation.navigate('deals', {
            title: this.props.title
        })
    };

    /*
    async _updateList() {
        const response = await AsyncStorage.getItem('listOfSubscriptions');
        const listOfSubscriptions = await JSON.parse(response) || [];
            this.setState({
                favorites: Subscriptions
            });
            console.log(this.state.Subscriptions);
            if (listOfSubscriptions.includes(this.props.Subscriptions)) {
                this.setState({ isLiked: true });
            }
            else {
                this.setState({ isLiked: false })
            }
            console.log(this.state.isSubed);
        };

    componentDidMount() {
        console.log(this.props.RestuarantCard);
        this._updateList();
    };

     renderStar() {
  if (this.state.isLiked) {
    return (
      <Image
        source={require('./images/logo.png')}
         style={{
           width: '50%',
           height: '50%',
           alignItems: 'flex-end',
           alignSelf: 'center',
           marginTop: 0,
           resizeMode: 'contain',
           marginBottom: 0,
           paddingBottom: 0,
           marginLeft: '20%'
         }}
      />
          );
  };
*/
    render() {
        return(
            <View style={styles.container}>

                <TouchableOpacity onPress={this._onPressButton}>

                    <Text style={styles.Header}>{this.props.title}</Text>

                </TouchableOpacity>

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
        fontSize: 24,
        fontFamily: 'serif',
        color: '#391B2A',
    }
});
