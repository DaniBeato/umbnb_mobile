import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


//import screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: '#FF5A5F',
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" size={size} color={color} />
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={LoginScreen}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account-circle-outline" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default function Navegation() {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
}