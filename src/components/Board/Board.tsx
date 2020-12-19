import React from 'react';

import './Board.css';
import { BOARD_SIZE } from '../../config';
import Piece, { PieceProps } from '../Piece/Piece';

export interface BoardProps {
  pieces: PieceProps[];
  onChange: (piece: PieceProps) => void;
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
        <Piece
          key={`${piece.coordinate[0]}${piece.coordinate[1]}`}
          color={piece.color}
          coordinate={piece.coordinate}
          onChange={(move) => {
            piece.coordinate = move;
            onChange(piece);
          }}
          moves={piece.moves}
          pieceType={piece.pieceType}
        />
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
