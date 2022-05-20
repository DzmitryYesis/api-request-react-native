import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const api = {
    getAllPokemon(limit: number) {
        return instance.get(`/pokemon?limit=${limit}`)
    },
    getCurrentPokemon(url: string) {
        return instance.get(url)
    }
}