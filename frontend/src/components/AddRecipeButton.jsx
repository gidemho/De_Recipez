import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddRecipeButton = ({ state, setState }) => {
   
    return (
        <div>
            <button className='rounded-full fixed bg-purple-600 p-2 bottom-5 right-5'
                onClick={() => {setState(true)}}
            >

                <FaPlus className='text-4xl text-white' />
            </button>
        </div>
    )
}

export default AddRecipeButton