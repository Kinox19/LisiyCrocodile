import React from 'react';
import PlayerState from '../../shared/players/player4/context/PlayerState'
import Playlist from '../../shared/players/player4/playlist/Playlist'
import Controls from '../../shared/players/player4/controls/Controls'

const Muz4 = () => {
  return (
    <PlayerState>
    <div>
    <Playlist/>
    <Controls/>
    </div>
    </PlayerState>
  )
}

export default Muz4