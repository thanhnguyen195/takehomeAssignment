import React, { Suspense } from 'react';
import { useImage } from 'react-image';

const Track = ({ title, poster, description }) => {

  const TrackPoster = () => {
    const {src} = useImage({
      srcList: poster,
    })
   
    return <img src={src}/>
  }

  return (
    <>
      <div className="trackPoster">
        <Suspense fallback={ <div>Image is loading</div> }>
          <TrackPoster/>
        </Suspense>
      </div>
      <div className="trackTitle">
        {title}
      </div>
      <div className="trackDescription">
        {description}
      </div>
    </>
  )
}

export default Track;