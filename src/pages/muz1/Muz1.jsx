import React from 'react'
import PlayerState from '../../shared/player/context/PlayerState'
import Playlist from '../../shared/player/playlist/Playlist'
import Controls from '../../shared/player/controls/Controls'


const Muz1 = () => {
  return (
    <PlayerState>
    <div>
    <Playlist/>
    <Controls/>
    </div>
    </PlayerState>
  )
}

export default Muz1