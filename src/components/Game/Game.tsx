import React, { useState } from 'react';

import { getInitPieces } from './../../services/seed';
import Board, { CoordinatePiece } from '../Board/Board';
import { PieceType } from '../Piece/Piece';
import { Coordinate } from '../Gridify/Gridify';

const Game = () => {
  const [game, setGame] = useState(getInitPieces());

  return (
    <div>
      <Board
        onChange={(pieces, movedPiece) => {
          const updatedPieces = updateGame(pieces, movedPiece);
          setGame(updatedPieces);
        }}
        pieces={game}
      ></Board>
      <button onClick={() => setGame(getInitPieces())}>Reset</button>
    </div>
  );
};
export default Game;

const updateGame = (pieces: CoordinatePiece[], movedPiece: CoordinatePiece) => {
  const game = toGameState(pieces, movedPiece);
  updateMoves(game);
  return pieces;
};

const updateMoves = (game: CoordinatePiece[][]) => {
  game.forEach((cols) =>
    cols.forEach((piece) => {
      if (piece != null) {
        switch (piece.pieceType) {
          case 'B':
            break;
          case 'K':
            break;
          case 'N':
            break;
          case 'P':
            piece.moves = calculatePawnMoves(game, piece);
            break;
          case 'Q':
            break;
          case 'R':
            break;
        }
      }
    })
  );
};

const calculatePawnMoves = (
  game: CoordinatePiece[][],
  piece: CoordinatePiece
) => {
  const moves = [] as Coordinate[];
  const x = piece.coordinate[0];
  const y = piece.coordinate[1];
  const colorMod = piece.color === 'white' ? 1 : -1;
  const colorStart = piece.color === 'white' ? 1 : 6;

  const plusOne = game[x][y + 1 * colorMod] as CoordinatePiece;
  if (!plusOne) {
    moves.push([x, y + 1 * colorMod]);
  }

  const plusTwo = game[x][y + 2 * colorMod] as CoordinatePiece;
  if (y === colorStart && !plusOne && !plusTwo) {
    moves.push([x, y + 2 * colorMod]);
  }

  const takeRight = game[x + 1]
    ? (game[x + 1][y + 1 * colorMod] as CoordinatePiece)
    : null;
  if (takeRight) {
    moves.push([x + 1, y + 1 * colorMod]);
  }

  const takeLeft = game[x - 1]
    ? (game[x - 1][y + 1 * colorMod] as CoordinatePiece)
    : null;
  if (takeLeft) {
    moves.push([x - 1, y + 1 * colorMod]);
  }

  return moves;
};

const toGameState = (
  pieces: CoordinatePiece[],
  movedPiece: CoordinatePiece
) => {
  const gameState = new Array(8)
    .fill(0)
    .map(() => new Array(8).fill(null)) as CoordinatePiece[][];

  for (let piece of pieces) {
    const x = piece.coordinate[0];
    const y = piece.coordinate[1];

    if (
      movedPiece.coordinate[0] === x &&
      movedPiece.coordinate[1] === y &&
      movedPiece.color !== piece.color
    ) {
      continue;
    }

    gameState[x][y] = piece;
  }

  return gameState;
};
