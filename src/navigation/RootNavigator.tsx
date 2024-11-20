import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import RepositoriesScreen from '../screens/RepositoriesScreen';
import RepoDetailsScreen from '../screens/RepoDetailsScreen';
import { StatusBar } from 'expo-status-bar';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Repos: undefined;
  RepoDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <>
    <StatusBar style="dark" />
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Repos" component={RepositoriesScreen} />
      <Stack.Screen name="RepoDetails" component={RepoDetailsScreen} />
    </Stack.Navigator>
  </>
);
