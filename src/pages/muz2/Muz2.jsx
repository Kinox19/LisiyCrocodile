import React from 'react';
import PlayerState from '../../shared/players/player2/context/PlayerState'
import Playlist from '../../shared/players/player2/playlist/Playlist'
import Controls from '../../shared/players/player2/controls/Controls'

const Muz2 = () => {
  return (
    <PlayerState>
    <div>
    <Playlist/>
    <Controls/>
    </div>
    </PlayerState>
  )
}

export default Muz2