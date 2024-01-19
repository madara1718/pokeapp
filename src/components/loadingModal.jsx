import { Modal, Spinner } from "flowbite-react";

export function LoadingModal({ value}) {

    return (
        <>
            <Modal show={value} size={'sm'} onClose={() => value}>
                <Modal.Header className='bg-[#e00c2c] '>
                    <p className='font-mono font-bold text-2xl text-white text-center w-fullborder'>Loading Pokemons!</p>
                </Modal.Header>
                <Modal.Body className='mx-2'>
                    <div className="space-y-6 space-x-2 flex justify-center">
                        <Spinner className="mx-auto" size="xl" />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}