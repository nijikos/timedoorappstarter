import React from 'react';
// ** LIBRARIES
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// ** REDUX
// ** UI
import {Text} from 'react-native';
import {Icon} from 'react-native-elements';
// ** SCREENS
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StartScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      {/* ------------- HOME NAVIGATION */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'green' : 'grey',
                fontSize: 12,
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              type="material-community"
              color={focused ? 'purple' : 'grey'}
              size={24}
            />
          ),
          tabBarLabelPosition: 'below-icon',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'lavender',
          },
        }}
      />
      {/* ------------- PROFILE NAVIGATION */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'green' : 'grey',
                fontSize: 12,
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="account"
              type="material-community"
              color={focused ? 'purple' : 'grey'}
              size={24}
            />
          ),
          tabBarLabelPosition: 'below-icon',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'lavender',
          },
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
