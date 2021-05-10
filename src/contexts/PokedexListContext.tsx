import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from "react";

interface PokemonContextData {
    types: any[],
    isClicked: boolean,
    actualType: string,
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

    const [buttonClicked, setButtonClicked] = useState('');

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
        setButtonClicked(typeButtonClicked);
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
            actualType,
            buttonClicked,
            buttonIsClicked,
            buttonCancel
            }}>
            {children}
        </PokedexListContext.Provider>
    );
}