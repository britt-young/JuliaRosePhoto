import React from 'react'
import GalleryMix from '../Components/GalleryMix'
import GalleryBanner from '../Components/GalleryBanner'

const Gallery = () => {
  return (
    <div className="w-full h-max p-10">
      <GalleryMix />
      <GalleryBanner />
    </div>
  )
}

export default Gallery