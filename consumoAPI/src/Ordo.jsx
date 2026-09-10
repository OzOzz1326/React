import { useState } from "react";

function Ordo() {
    const [pokemon, setPokemon] = useState(null);
    const [search, setSearch] = useState("");

    async function searchPokemon(name) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+ name);

        const data = await response.json();

        console.log(data);

        setPokemon(data);
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Consulte um Pokemon</p>

            <hr />

            <input onChange={e => setSearch(e.target.value)} placeholder="Digite uma criatura..."/>
            <button onClick={() => searchPokemon(search)}>Pesquisar</button>

            <hr />

            {pokemon === null ?
                <p>Escreva um nome</p>
             : 
                <div>
                    <h1>Nome: {pokemon.name}</h1>
                    <p>Tipo: {pokemon.types[0].type.name}</p>
                    <img width={200} src={pokemon.sprites.other.showdown.front_default}/>
                </div>
            }
        </div>
    );
}

export default Ordo;