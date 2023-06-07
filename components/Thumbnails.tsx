
import { Movie } from '@/typescript'
import Image from 'next/image'
import React from 'react'

interface Props {
    movie: Movie
}

const Thumbnails = ({ movie }: Props) => {
    console.log(movie)
  return (
    <div
    className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    // onClick={() => {
    //   setCurrentMovie(movie)
    //   setShowModal(true)
    // }}
  >
    <Image
      src={`https://image.tmdb.org/t/p/w500${
        movie.backdrop_path || movie.poster_path
      }`}
      alt=''
      className="rounded-sm object-cover md:rounded"
      layout="fill"
    />
  </div>
  )
}

export default Thumbnails