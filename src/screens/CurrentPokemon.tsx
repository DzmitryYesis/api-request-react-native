import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CurrentPokemonPropsType} from './types';
import {api} from '../api/api';

type Pokemon = {
    id: number
    name: string
    sprites: {
        other: {
            'official-artwork': {
                'front_default': string
            }
        }
    }
}
export const CurrentPokemon = ({route}: CurrentPokemonPropsType) => {
    const {url} = route.params
    const [urlForRequest, setUrlForRequest] = useState(url)

    const [data, setData] = useState<Pokemon | null>(null)

    useEffect(() => {
        setUrlForRequest(url.replace('https://pokeapi.co/api/v2', ''))
    }, [url])

    const getCurrent = async (url: string) => {
        const res = await api.getCurrentPokemon(url)
        //console.log('res***', res.data)
        setData(res.data)
    }

    useEffect(() => {
        getCurrent(urlForRequest).finally(() => {
        })
    }, [])

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {data ? <Image
                    style={{width: 400, height: 400}}
                    source={{uri: data.sprites.other['official-artwork'].front_default}}/> :
                <Text>__N/A Image__</Text>}
            <View style={{width: 400, height: 5, backgroundColor: '#c41414'}}/>
            {data ? <Text style={styles.name}>{data.name}</Text> :
                <Text>__N/A Name__</Text>}
            <View style={{width: 400, height: 5, backgroundColor: '#c41414'}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 32,
        fontWeight: '800',
        alignSelf: 'center'
    }

})