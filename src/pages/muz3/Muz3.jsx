import React from 'react';
import PlayerState from '../../shared/players/player3/context/PlayerState'
import Playlist from '../../shared/players/player3/playlist/Playlist'
import Controls from '../../shared/players/player3/controls/Controls'

const Muz3 = () => {
  return (
    <PlayerState>
    <div>
    <Playlist/>
    <Controls/>
    </div>
    </PlayerState>
  )
}

export default Muz3