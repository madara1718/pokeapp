import React from 'react'
import { Button, TextInput, Label } from 'flowbite-react';


export function PokemonPreviewContainer({number, sprite, name}) {

    return (
        <>
            <div className="rounded border border-black w-full h-[33vh] px-2 ">
                <div className="block text-center">
                    <Label value={number}></Label >
                </div>

                <div className="block flex items-center justify-center h-[70%]">
                    <img src={sprite} className='w-full md:w-1/2'></img >
                </div>

                <div className="block text-center mb-5">
                    <Label value={name}></Label >
                </div>
            </div>
        </>
    );
}