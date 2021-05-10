import { createContext, ReactNode } from "react";
import { PokedexListContext } from '../contexts/PokedexListContext';

export const PokemonsContext = createContext('');

interface PokemonsContextProps{
    children: ReactNode,
}

export function PokemonsContextProvider({ children } : PokemonsContextProps){


    
    return(
        <PokemonsContext.Provider value={''}>
            {children}
        </PokemonsContext.Provider>
    );
}