import { useEffect, useState } from "react"


type PokemonItemType = {
    name: string;
    url: string;
};

const tableColumns = ["Name", "url"];

async function fetchPokemons(offset: number, limit: number) {
    const res = await fetch(process.env.REACT_APP_API_BASE_URL)
}

export default function BookShelf() {
    const [pokemonList, setPokemonList] = useState<PokemonItemType[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {

    }, [])

    <table className="table-fixed">
        <thead>
            <th>
                {
                    tableColumns.map((col, i) => {
                        return <th>{col}</th>
                    })
                }
            </th>
        </thead>
        <tbody>
            {
                pokemonList.map((pokemon) => {
                    return <tr>
                        <td>
                            {pokemon.name}
                        </td>
                        <td>
                            {pokemon.url}
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
}