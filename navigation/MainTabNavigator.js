import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


//import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Nearme from '../screens/Nearme';
import Subscriptions from '../screens/Subscriptions';
import StackNav from '../navigation/StackNav';


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
            screen: Nearme,
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
            screen: Subscriptions,
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
    /*    StackNav: {
            screen: StackNav,
            navigationOptions: {
                tabBarLabel: 'StackNav',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={'home'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            }
        },*/
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
