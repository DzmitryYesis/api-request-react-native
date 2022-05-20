import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AllPokemon} from './AllPokemon';

const Stack = createNativeStackNavigator();

export const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'AllPokemon'} component={AllPokemon}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
