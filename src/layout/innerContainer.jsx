import { PokemonContainer } from "../components/pokemonContainer";
import { TopBar } from "./searchBar";

export function InnerContainer() {

    return (
        <>
            <div>
                <div className="bg-[#e00c2c] rounded h-screen ">
                    <TopBar/>
                    <PokemonContainer/>
                </div>
            </div>
        </>
    );
}