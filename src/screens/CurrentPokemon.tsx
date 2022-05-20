import React from 'react';
import {Text, View} from 'react-native';
import {CurrentPokemonPropsType} from './types';

export const CurrentPokemon = ({route}:CurrentPokemonPropsType) => {
const {url} = route.params

    return (
        <View>
            <Text>{url}</Text>
        </View>
    );
};