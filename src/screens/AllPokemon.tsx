import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {api} from '../api/api';
import {useAppNavigation} from './types';

type PokemonListItem = {
    name: string
    url: string
}

export const AllPokemon = () => {

    const [dataPokemon, setDataPokemon] = useState<PokemonListItem[] | null>(null)
    const navigation = useAppNavigation()

    const getPokemon = async () => {
        const result = await api.getAllPokemon(40)
        setDataPokemon(result.data.results)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={dataPokemon}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity activeOpacity={0.7}
                                          onPress={() => navigation.navigate('CurrentPokemon', {url: item.url})}>
                            <View style={styles.row}>
                                <Text style={styles.pokemonName}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        paddingHorizontal: 20
    },
    row: {
        height: 48,
        backgroundColor: '#9e8787',
        marginVertical: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemonName: {
        fontWeight: '500',
        fontSize: 26
    }
})