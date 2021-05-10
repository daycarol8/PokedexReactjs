import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from "react";

interface PokemonContextData {
    types: any[]
}

interface PokemonProviderProps{
    children: ReactNode;
}

export const PokedexListContext = createContext({} as PokemonContextData);

export function PokedexListProvider({ children } : PokemonProviderProps){

    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type').then(res =>{
        setTypes(res.data.results.map(p => p.name));
    })
    }, [])


    return(
        <PokedexListContext.Provider value={{types}}>
            {children}
        </PokedexListContext.Provider>
    );
}