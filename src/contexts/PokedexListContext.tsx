import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from "react";

interface PokemonContextData {
    types: any[],
    isClicked: boolean,
    buttonClicked: string,
    buttonIsClicked: (typeButtonClicked) => void,
    buttonCancel: () => void
}

interface PokemonProviderProps{
    children: ReactNode;
}

export const PokedexListContext = createContext({} as PokemonContextData);

export function PokedexListProvider({ children } : PokemonProviderProps){

    const [types, setTypes] = useState([]);

    const [isClicked, setClicked] = useState(false);

    const [buttonClicked, setBClicked] = useState('');

    const [currentTypeUrl, setCurrentTypeUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    const [actualType, setActualType] = useState('normal');

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type').then(res =>{
        setTypes(res.data.results.map(p => p.name));
    })
    }, [])

    function buttonIsClicked(typeButtonClicked){
        setClicked(true);
        setActualType(typeButtonClicked);
        setBClicked(typeButtonClicked);
    }

    function buttonCancel(){
        setClicked(false);
    }

    function setListPokemon(actualType){
        setCurrentTypeUrl(`https://pokeapi.co/api/v2/type/${actualType}`);
    }


    return(
        <PokedexListContext.Provider value={{
            types,
            isClicked,
            buttonClicked,
            buttonIsClicked,
            buttonCancel
            }}>
            {children}
        </PokedexListContext.Provider>
    );
}