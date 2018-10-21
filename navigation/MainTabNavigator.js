import React from 'react';
import firebase from 'react-native-firebase';
import { Platform, Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


//import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Nearme from '../screens/Nearme';
import Subscriptions from '../screens/Subscriptions';
import Logout from '../screens/Logout';
import StackNav from '../navigation/StackNav';
import StackNav_2 from '../navigation/StackNav_2';
import StackNav_3 from '../navigation/StackNav_3';


var {height, width} = Dimensions.get('window');

export default createBottomTabNavigator(
    {
        Home: {
            screen: StackNav,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={'home'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            }
        },
        Nearme: {
            screen: StackNav_2,
            navigationOptions: {
                tabBarLabel: 'Locations',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={'add'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },
        Subscriptions: {
            screen: StackNav_3,
            navigationOptions: {
                tabBarLabel: 'Subscriptions',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={'book'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },
       Logout: {
            screen: Logout,
            navigationOptions: {
                tabBarLabel: 'Logout',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={'cancel'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            }
        },
    },
    {
        initialRouteName: 'Home',
        //tabBarPosition: 'bottom',
        //tabBarComponent: TabBarTop,
        animationEnabled: false,
        //swipeEnabled: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            activeTintColor: '#003E5B',
            inactiveTintColor: '#F0F0F0',
            allowFontScaling: false,
            style: {
                height: height*.08,
                backgroundColor: 'white',
            },
            labelStyle: {
                fontSize: 10,
            },
            indicatorStyle: {
                height: 0,
            }
        }
    }
);
