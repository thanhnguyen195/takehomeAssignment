import { useState, useEffect } from 'react';

import Track from './Track';
import data from '../data/audioFeedData.json';

const Feed = () => {
  const [tracks, setTracks] = useState([]);

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  const getData = () => {
    let tracksData = data.tracks;
    tracksData = shuffle(tracksData);
    console.log(tracksData);
    setTracks(tracksData);
  }

  useEffect(() => {
    getData();
  }, []);
  

  const TrackComponent = () => {
    if (tracks.length == 0) {
      return (<div>Loading</div>)
    } else {
      // console.log(tracks)
      // tracks.map((track) => {
      //   console.log(track.id.s);
      // });
      return (
        tracks.map((track) => 
          <Track
            key={track.id.s}
            title={track.title.s}
            poster={track.poster.s}
            description={track.description.s}
          />
        )
      )
    }
  }
    


  return (
    <div className="feed">
      <div className="track">
        <TrackComponent/>
      </div>
    </div>
  )
}

export default Feed;