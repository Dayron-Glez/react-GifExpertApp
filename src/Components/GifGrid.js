import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const {data:images,loading} = useFetchGifs( category );
  


return (
<>
  <h3 className="category "> ----{ category }---- </h3>
  
  <h2 className="loading animate__animated animate__flash">{ loading && <p>Loading...</p> }</h2>
  <div className="card-grid">

    {images.map(img =>
      <GifGridItem
      key= {img.id}
      {...img} />
    )}
  </div>
  </>
)}

