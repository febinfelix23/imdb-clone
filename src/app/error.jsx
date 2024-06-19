"use client"
import React from 'react'

function error({ reset }) {

    return (
        <div className='text-center mt-10'>
            <h1>Something went wrong. Please try again!</h1>
            <button onClick={() => reset()} className='hover:text-yellow-500'>Try Again</button>
        </div>
    )
}

export default error