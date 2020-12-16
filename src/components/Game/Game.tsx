import React, { useState } from 'react';

import { getInitPieces } from './../../services/seed';
import Board from '../Board/Board';

const Game = () => {
  const [game, setGame] = useState(getInitPieces());

  return (
    <div>
      <Board onChange={(pieces) => setGame(pieces)} pieces={game}></Board>
      <button onClick={() => setGame(getInitPieces())}>Reset</button>
    </div>
  );
};
export default Game;
