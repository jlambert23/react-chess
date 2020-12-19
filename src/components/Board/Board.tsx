import React from 'react';

import './Board.css';
import { BOARD_SIZE } from '../../config';
import Piece, { PieceProps } from '../Piece/Piece';
import Gridify, { GridifyProps } from '../Gridify/Gridify';

export type CoordinatePiece = Omit<PieceProps & GridifyProps, 'onChange'>;

export interface BoardProps {
  pieces: CoordinatePiece[];
  onChange: (pieces: CoordinatePiece[], movedPiece: CoordinatePiece) => any;
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
  onChange: (pieces: CoordinatePiece[], movedPiece: CoordinatePiece) => any
) =>
  pieces.map((piece) => (
    <Gridify
      key={`${piece.coordinate[0]}${piece.coordinate[1]}`}
      onChange={(move) => {
        piece.coordinate = move;
        onChange([...pieces], piece);
      }}
      moves={piece.moves}
      coordinate={piece.coordinate}
    >
      <Piece color={piece.color} pieceType={piece.pieceType}></Piece>
    </Gridify>
  ));
