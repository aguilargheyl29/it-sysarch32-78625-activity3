import React from "react";

function Pokemon({ pokemon, language }) {
    return (
        <div className="card">
            <img className="pokemonImg" src={pokemon.image} alt={pokemon.name.english} />
            <div className="info">
                <h3 className="label">{pokemon.id} {pokemon.name[language]}</h3>
            </div>
            <div className="type">{pokemon.type.join(', ')}</div>
            <div className="details">
                <div className="info1">HP: {pokemon.base.HP}</div>
                <div className="info2">Speed: {pokemon.base.Speed}</div>
                <div className="info3">Attack: {pokemon.base.Attack}</div>
                <div className="info4">Sp Attack: {pokemon.base["Sp Attack"]}</div>
                <div className="info5">Defense: {pokemon.base.Defense}</div>
                <div className="info6">Sp Defense: {pokemon.base["Sp Defense"]}</div>
            </div>
        </div>
    );
}

export default Pokemon;
