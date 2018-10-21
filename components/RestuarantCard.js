//This screem will nav to the deals screen
import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, Modal, AsyncStorage } from 'react-native';
import store from 'react-native-simple-store';
import { Icon } from 'react-native-elements';

var {height, width} = Dimensions.get('window');

export default class RestuarantCard extends React.Component {
      state = {
          heart: false,
        }

        componentDidMount() {
          this.updateHeart();
        }
        updateHeart = async () => {
          var favorites = await AsyncStorage.getAllKeys();
          console.log(favorites+' test')
          var count = 0;
          for (i=0; i<favorites.length;i++){
            if (this.props.title==favorites[i]){
              count+=1;
            }
          }
          if (count==0){
            var title=this.props.title;
            this.setState({heart: false})
            console.log('hasbeenstored');
          }
          else {
            var title=this.props.title;
            this.setState({heart: true})
            console.log('hasbeendeleted');
          }
        }
    _onPressButton = () => {
        console.log(this.props)
        this.props.navigation.navigate('deals', {
            title: this.props.title
        })
    };

      favorite = async () => {
      console.log('hasbeenpushed')
      var favorites = await AsyncStorage.getAllKeys();
      console.log(favorites+' test')
      var count = 0;
      for (i=0; i<favorites.length;i++){
        if (this.props.title==favorites[i]){
          count+=1;
        }
      }
      if (count==0){
        var title=this.props.title;
        AsyncStorage.setItem(title, title)
        this.setState({heart: true})
        console.log('hasbeenstored');
      }
      else {
        var title=this.props.title;
        AsyncStorage.removeItem(title)
        this.setState({heart: false})
        console.log('hasbeendeleted');
      }
    }

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

    let button = null;
    if (this.state.heart) {
      button =
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginRight: 15, marginBottom: 5, justifyContent: 'center', alignItems: 'center'}}
          onPress={this.favorite}>
          <Icon name="favorite" style={{fontSize: 36, color: 'pink'}}/>
        </TouchableOpacity>;
    } else {
      button =
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginRight: 15, marginBottom: 5, justifyContent: 'center', alignItems: 'center'}}
          onPress={this.favorite}>
          <Icon name="filter-tilt-shift" style={{fontSize: 36}}/>
        </TouchableOpacity>;
    }
        return(
            <View style={styles.container}>

                <TouchableOpacity onPress={this._onPressButton}>
                  <View style={{flex: 3, alignItems:'center', width: width*.9}}>
                    <Text style={styles.Header}>{this.props.title}</Text>
                  </View>
                  {button}

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
      textAlign: 'center',
      alignSelf: 'stretch',
        borderBottomWidth: 2,
        borderBottomColor: '#C0C0C0',
        fontSize: 20,
        fontFamily: 'serif',
        color: '#391B2A',
    }
});
