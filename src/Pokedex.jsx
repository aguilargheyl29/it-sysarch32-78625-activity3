import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon'; // Make sure to import the Pokemon component

function Pokedex() {
    const [pokemonList, setPokemonList] = useState([]);
    const [language, setLanguage] = useState('english');

    useEffect(() => {
        // Fetch Pokemon data from the API
        fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
            .then(response => response.json())
            .then(data => setPokemonList(data))
            .catch(error => console.error('Error fetching Pokemon data:', error));
    }, []);

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div className="pokedex">
            <div className="language-buttons">
                <button onClick={() => handleLanguageChange('english')}>English</button>
                <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
                <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
                <button onClick={() => handleLanguageChange('french')}>French</button>
            </div>
            <div className="pokemon-list">
                {pokemonList.map(pokemon => (
                    <Pokemon
                        key={pokemon.id}
                        pokemon={pokemon}
                        language={language}
                    />
                ))}
            </div>
        </div>
    );
}

export default Pokedex;
