import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {api} from '../api/api';

type PokemonListItem = {
    name: string
    url: string
}


export const AllPokemon = () => {
    const [dataPokemon, setDataPokemon] = useState<PokemonListItem[] | null>(null)

    const getPokemon = async () => {
        const result = await api.getAllPokemon(40)
        setDataPokemon(result.data.results)
    }
    useEffect(() => {
        getPokemon()
    }, [])
    console.log(dataPokemon)
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={dataPokemon}
                renderItem={({item}) => {
                return (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )
            }}
                keyExtractor={(item) => item.name}/>
        </View>
    );
};