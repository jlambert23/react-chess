import React from 'react';

import './Board.css';
import { BOARD_SIZE } from '../../config';
import Piece, { PieceProps } from '../Piece/Piece';
import Gridify, { GridifyProps } from '../Gridify/Gridify';

export type CoordinatePiece = Omit<PieceProps & GridifyProps, 'onChange'>;

export interface BoardProps {
  pieces: CoordinatePiece[];
  onChange: (pieces: CoordinatePiece[]) => any;
}

const Board = ({ onChange, pieces }: BoardProps) => (
  <div style={{ width: BOARD_SIZE, height: BOARD_SIZE }}>
    {getSquares()}
    {gridifyPieces(pieces, onChange)}
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

const gridifyPieces = (
  pieces: CoordinatePiece[],
  onChange: (pieces: CoordinatePiece[]) => any
) =>
  pieces.map((piece) => (
    <Gridify
      key={piece.place}
      onChange={(move) => {
        piece.place = move;
        onChange([...pieces]);
      }}
      moves={piece.moves}
      place={piece.place}
    >
      <Piece color={piece.color} pieceType={piece.pieceType}></Piece>
    </Gridify>
  ));
