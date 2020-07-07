import { get } from 'axios'

export function allPokemon (limit = 0, offset = 0) {
    let params = ''
    if (limit > 0 || offset > 0) {
        params = `?limit=${limit}&offset=${offset}`
    }
    return get(`https://pokeapi.co/api/v2/pokemon${params}`).then(result => result.data)
}

export function specificPokemon(name){
    return get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(result => result.data)
}