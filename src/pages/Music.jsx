import React from 'react'

//Components
import SongGrid from '../components/SongGrid';


function Music({songs, setSongClicked}) {

      return (

        <div className='music-container'>
            <SongGrid songs={songs} setSongClicked={setSongClicked} />
        </div>
      
      );
}

  export default Music