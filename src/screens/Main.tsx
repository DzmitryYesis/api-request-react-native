import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AllPokemon} from './AllPokemon';
import {CurrentPokemon} from './CurrentPokemon';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'AllPokemon'} component={AllPokemon}/>
                <Stack.Screen name={'CurrentPokemon'} component={CurrentPokemon}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
