import Link from 'next/link'
import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa6";

function Card({ result }) {
    return (
        <div className='group m-3 hover:cursor-pointer'>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <Link href={`/movie/${result.id}`}><img className='group-hover:opacity-75 transition-opacity duration-300' src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt="poster" /></Link>
                </figure>
                <div className="card-body">
                    <h2 className="card-title line-clamp-1">{result.title || result.name}</h2>
                    <p className='line-clamp-3 text-start'>{result.overview || 'No overview!'}</p>
                    <p className='flex justify-between mt-5'>
                        <span className='flex items-center gap-1'><FaRegStar className='text-yellow-500' /> {(result.vote_average).toFixed(1)}</span>
                        <span className='flex items-center gap-1'><FaRegThumbsUp  className='text-blue-500' /> {result.vote_count}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card