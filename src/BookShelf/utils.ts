import { generateURLParamsString } from "../utils";

type PokemonItemType = {
    name: string;
    url: string;
};

const tableColumns = ["Name", "url"];

async function fetchPokemons(offset: number, limit: number, searchString?: string) {
    console.log("import.meta.env.BASE_URL ", import.meta.env.VITE_API_BASE_URL);
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}?${generateURLParamsString({ offset: offset.toString(), limit: limit.toString(), searchString: searchString})}`);

    if(!res.ok) {
        throw new Error("response was not successful");
    }

    return await res.json();
}

export { tableColumns, fetchPokemons };
export type { PokemonItemType };
