import { useEffect, useState } from "react";

import { type PokemonItemType } from "./utils";

import { fetchPokemons, tableColumns } from "./utils";

export default function BookShelf() {
    const [pokemonList, setPokemonList] = useState<PokemonItemType[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [perPage, _] = useState<number>(10);

    useEffect(() => {
        const initPokemons = async () => {
            const { count, results } = await fetchPokemons((perPage * currentPage), perPage);
            setTotalPages(Math.ceil(count / perPage));
            setPokemonList(results)
        }
        initPokemons()
    }, [])

    return <div className="flex justify-center">
        <table className="table-fixed border-collapse w-full text-sm">
            <thead>
                <tr>
                    {
                        tableColumns.map((col, i) => {
                            return <th className="text-left p-4 pt-0 pl-8" key={i} >{col}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    pokemonList.map((pokemon, i) => {
                        return <tr key={i}>
                            <td className="p-4 pt-0 pl-8">
                                {pokemon.name}
                            </td>
                            <td className="p-4 pt-0 pl-8">
                                {pokemon.url}
                            </td>
                        </tr>
                    })
                }
            </tbody>
    </table>
    <button>previous</button>
    <button disabled={isLoading || currentPage === totalPages} >next</button>
    </div>
}