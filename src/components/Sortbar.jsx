import React from 'react'
import SortbarItems from './SortbarItems'

function Sortbar() {
  return (
    <div className='flex bg-yellow-500 text-black font-semibold p-4 lg:text-lg justify-center gap-10'>
        <SortbarItems title="Trending" param="fetchTrending"/>
        <SortbarItems title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Sortbar