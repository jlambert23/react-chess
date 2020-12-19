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
    <div>
      {Array.from({ length: 64 }, (_, i) => (
        <Square key={i} index={i} />
      ))}
    </div>
    <div>
      {pieces.map((piece) => (
        <Gridify
          key={`${piece.coordinate[0]}${piece.coordinate[1]}`}
          onChange={(move) => {
            piece.coordinate = move;
            onChange([...pieces]);
          }}
          moves={piece.moves}
          coordinate={piece.coordinate}
        >
          <Piece color={piece.color} pieceType={piece.pieceType} />
        </Gridify>
      ))}
    </div>
  </div>
);
export default Board;

const Square = ({ index }: { index: number }) => (
  <div
    key={index}
    className={'square' + (index % 16 > 7 ? ' invert' : '')}
    style={{ width: BOARD_SIZE / 8, height: BOARD_SIZE / 8 }}
  ></div>
);
