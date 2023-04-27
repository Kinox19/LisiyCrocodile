import React from 'react'
import PlayerState from '../../shared/players/player1/context/PlayerState'
import Playlist from '../../shared/players/player1/playlist/Playlist'
import Controls from '../../shared/players/player1/controls/Controls'


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