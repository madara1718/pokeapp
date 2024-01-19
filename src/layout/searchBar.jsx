import pokeball from './../assets/pokeball-icon.png'
import { Button, Modal, Radio, TextInput, Label } from 'flowbite-react';
import { BiSearch } from 'react-icons/bi';
import { usePokemon } from '../Logic/Services/PokemonService';

export function TopBar() {
    const setFilter = usePokemon(state => state.setFilter);
    const filterPokemon = usePokemon(state => state.filterPokemon)
    const sortModal = usePokemon(state => state.sortModal);
    const setSortModal = usePokemon(state => state.setSortModal);
    const getAllPokemons = usePokemon(state => state.getAllPokemons);
    const setSortByName = usePokemon(state => state.setSortByName);
    const sort = usePokemon(state => state.sort);
    const pokemonNumber = usePokemon(state => state.pokemonNumber);
    const setPokemonList = usePokemon(state => state.setPokemonList);
    return (
        <>
            <nav className="flex flex-col bg-[#e00c2c] pt-2">
                <div className="flex flex-row mx-10 gap-4 py-2">
                    <img src={pokeball} className="w-10 h-10 mt-1" />
                    <h1 className='font-mono font-bold text-5xl text-white'>Pokedex</h1>
                </div>

                <div className="flex flex-row mx-10 my-2 gap-4 ">
                    <div className="mb-2  block w-3/4">
                        <TextInput id="pokemonName" type="text" icon={BiSearch} placeholder="Search"
                            onChange={(e) => { setFilter(e); filterPokemon() }} />
                    </div>

                    <div className="mb-2 block w-10">
                        <Button color="light" onClick={() => setSortModal(true)} pill>#</Button>
                    </div>
                </div>
            </nav>
            <Modal show={sortModal} size={'sm'} onClose={() => setSortModal(false)}>
                <Modal.Header className='bg-[#e00c2c] '>
                    <p className='font-mono font-bold text-2xl text-white text-center w-fullborder'>Sort By:</p>
                </Modal.Header>
                <Modal.Body className='mx-2'>
                    <div className="space-y-6 space-x-2">
                        <fieldset className="flex max-w-md flex-col gap-4 mx-auto">
                            <Button.Group className='flex justify-center'>
                                <Button color="gray" onClick={()=>{setSortByName()}}>Name</Button>
                                <Button color="gray" onClick={()=>{setPokemonList()}}>Number</Button>
                            </Button.Group>
                        </fieldset>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
} 