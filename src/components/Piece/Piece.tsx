import './Piece.css';
import { BOARD_SIZE } from './../../config';

export type PieceType = 'P' | 'R' | 'N' | 'B' | 'Q' | 'K';

export interface PieceProps {
  pieceType: PieceType;
  color: 'white' | 'black';
}

export default function Piece({ pieceType, color }: PieceProps) {
  return (
    <div
      className='piece'
      style={{
        backgroundColor: color,
        color: color === 'black' ? 'white' : 'black',
        fontSize: `${(BOARD_SIZE / 8) * 0.025}em`,
      }}
    >
      {pieceType}
    </div>
  );
}
