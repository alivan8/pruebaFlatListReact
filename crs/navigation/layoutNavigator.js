import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './AuthNavigator';
import {ArticlesNavigator} from './ArticlesNavigator'
import {Text, View} from "react-native";
const Stack = createStackNavigator();

/*<Stack.Navigator>
    <Stack.Screen name='AuthNavigator' component={AuthNavigator} />
</Stack.Navigator>*/

export const LayoutsNavigator = ()=> (

    <Stack.Navigator>

        <Stack.Screen name='ArticlesNavigator' component={ArticlesNavigator} />

    </Stack.Navigator>
);

