import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


//import screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const LoginStackNavigator = createNativeStackNavigator();

function LoginNavigator() {
	return (
		<LoginStackNavigator.Navigator
			initialRouteName="Register"
		>
			<LoginStackNavigator.Screen
				name="Login"
				component={LoginScreen}
				options={{
					headerShown: false,
				}}
			/>
			<LoginStackNavigator.Screen
				name="Register"
				component={RegisterScreen}
				options={{
					headerShown: false,
				}}
			/>
			<LoginStackNavigator.Screen
				name="Home"
				component={MyTabs}
				options={{
					headerShown: false,
				}}
			/>
		</LoginStackNavigator.Navigator>
	);
}

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				tabBarActiveTintColor: '#ff565b',
			}}
		>
			<Tab.Screen
				name="HomeScreen"
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
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account-circle-outline" size={size} color={color} />
					),
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
}

export default function Navegation() {
	return (
		<NavigationContainer>
			<LoginNavigator />
		</NavigationContainer>
	);
}