import React from 'react';

import './Board.css';
import { BOARD_SIZE } from '../../config';
import Piece, { PieceProps } from '../Piece/Piece';
import Gridify, { GridifyProps } from '../Gridify/Gridify';

export type CoordinatePiece = GridifyProps & PieceProps;

export interface BoardProps {
  pieces: CoordinatePiece[];
}

const Board = ({ pieces }: BoardProps) => (
  <div style={{ width: BOARD_SIZE, height: BOARD_SIZE }}>
    {getSquares()}
    {gridifyPieces(pieces)}
  </div>
);
export default Board;

const getSquares = () =>
  Array.from(Array(64)).map((_, i) => (
    <div
      key={i}
      className={'square' + (i % 16 > 7 ? ' invert' : '')}
      style={{ width: BOARD_SIZE / 8, height: BOARD_SIZE / 8 }}
    ></div>
  ));

const gridifyPieces = (pieces: CoordinatePiece[]) =>
  pieces.map(({ color, onChange, moves, pieceType, place }) => (
    <Gridify key={place} {...{ moves, onChange, place }}>
      <Piece {...{ color, pieceType }}></Piece>
    </Gridify>
  ));
