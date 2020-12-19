import React, { useState } from 'react';

import { getInitPieces } from './../../services/seed';
import Board from '../Board/Board';
import { PieceProps } from '../Piece/Piece';

const Game = () => {
  const [game, setGame] = useState(getInitPieces());

  const onChange = (piece: PieceProps) => {
    const i = game.findIndex(
      (p) =>
        p.coordinate[0] === piece.coordinate[0] &&
        p.coordinate[1] === piece.coordinate[1]
    );
    game.splice(i, 1);
    game.push(piece);
    setGame([...game]);
  };

  return (
    <div>
      <Board onChange={onChange} pieces={game}></Board>
      <button onClick={() => setGame(getInitPieces())}>Reset</button>
    </div>
  );
};
export default Game;
