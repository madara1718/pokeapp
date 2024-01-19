import { useEffect } from "react";
import { usePokemon } from "../Logic/Services/PokemonService";
import { PokemonPreviewContainer } from "./pokemonPreviewContainer";
import { Card, Dropdown, Modal } from 'flowbite-react';
import { LoadingModal } from "./loadingModal";
import { TypeComponent } from "./typeComponent";

export function PokemonContainer() {

    const pokemonList = usePokemon(state => state.pokemonList);
    const modalOpen = usePokemon(state => state.modalOpen);
    const getAllPokemons = usePokemon(state => state.getAllPokemons);
    const setOpenModal = usePokemon(state => state.setOpenModal);
    const cargando = usePokemon(state => state.cargando);
    const pokemon = usePokemon(state => state.pokemon);
    const types = usePokemon(state => state.types);
    //
    useEffect(() => {
        getAllPokemons();
    }, [getAllPokemons]);

    console.log(pokemonList[0])
    return (
        <>
            <section className="mx-auto w-[97%] h-[75%] border border-black rounded-md bg-gray-200 overflow-auto">
                <div className="grid grid-cols-3 p-3 gap-2 auto-rows-[minmax(0,1fr)]">
                    {pokemonList.map((item) => (
                        <div key={item.id} className="p-2" onClick={() => setOpenModal(true, item)}>
                            <PokemonPreviewContainer
                                number={item.id}
                                name={item?.name}
                                sprite={item?.sprites?.front_default}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <>

                <Modal show={modalOpen} size={'md'} onClose={() => setOpenModal(false)}>
                    <Modal.Header className="bg-[#e00c2c]">
                        <p className='font-mono font-bold text-2xl text-white text-center w-full'>Pokemon</p>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <div className="block flex items-center justify-center">
                                <img src={pokemon?.sprites?.front_default} 
                                className='w-full md:w-2/3' loading="lazy"></img >
                            </div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <div className="text-center ">{pokemon?.name}</div>
                            </h5>
                            <div className="font-normal text-gray-700 dark:text-gray-400 flex gap-2">
                                {
                                    types?.map((item, i) => (
                                        <TypeComponent i={i} item={item} />
                                    ))
                                }
                            </div>
                            <div className="font-normal text-gray-700 dark:text-gray-400">
                                <p>Height: {pokemon?.height} cm</p>
                                <p>Weight: {pokemon?.weight} cm</p>
                            </div>
                            <h6 className=" font-bold tracking-tight text-gray-900 dark:text-white w-100 ">
                                STATS
                            </h6>
                            <div className="font-normal text-gray-700 dark:text-gray-400">
                                {
                                    pokemon?.stats?.map((item, i) => (
                                        <p>{item?.stat?.name.toUpperCase()}: {item?.base_stat} </p>
                                    ))
                                }
                            </div>
                            <div className="flex justify-center">
                                <Dropdown label="Moves" dismissOnClick={false}>
                                    {
                                        pokemon?.moves?.map(({ move }) => (
                                            <Dropdown.Item>{move.name}</Dropdown.Item>
                                        ))
                                    }
                                </Dropdown>
                            </div>


                        </Card>
                    </Modal.Body>

                </Modal>
                <LoadingModal value={cargando} />
            </>
        </>
    );
}