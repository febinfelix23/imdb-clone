"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function SortbarItems({title, param}) {

    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

  return (
    <div>
        <Link className={`hover:bg-yellow-400 rounded-md p-2 ${genre === param? 'underline underline-offset-8' : ''}`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default SortbarItems