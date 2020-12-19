import React, { useEffect, useState } from 'react';
import Draggable, { ControlPosition } from 'react-draggable';

import './Piece.css';
import { BOARD_SIZE } from '../../config';

const SQUARE_SIZE = BOARD_SIZE / 8;
const OFFSET = { x: -SQUARE_SIZE / 2, y: -SQUARE_SIZE / 2 } as ControlPosition;

export type Coordinate = [x: number, y: number];
export type PieceType = 'P' | 'R' | 'N' | 'B' | 'Q' | 'K';

export interface PieceProps {
  color: 'white' | 'black';
  coordinate: Coordinate;
  moves: Coordinate[];
  onChange: (move: Coordinate) => void;
  pieceType: PieceType;
}

const Piece = (props: PieceProps) => (
  <DraggableWrapper {...props}>
    <div
      className='piece'
      style={{
        backgroundColor: props.color,
        color: props.color === 'black' ? 'white' : 'black',
        fontSize: `${(BOARD_SIZE / 8) * 0.025}em`,
      }}
    >
      {props.pieceType}
    </div>
  </DraggableWrapper>
);
export default Piece;

const DraggableWrapper: React.FC<PieceProps> = (props) => {
  const [pos, setPos] = useState(toControlPosition(props.coordinate));
  const nodeRef = React.useRef(null);

  useEffect(() => {
    const newPos = toControlPosition(props.coordinate);
    setPos(newPos);
  }, [props.coordinate]);

  return (
    <Draggable
      bounds={{
        left: 0,
        top: 0,
        right: SQUARE_SIZE * 8,
        bottom: SQUARE_SIZE * 8,
      }}
      nodeRef={nodeRef}
      onStop={(_, newPos) => {
        const coord = toCoordinate(newPos);
        if (props.moves.some((m) => m[0] === coord[0] && m[1] === coord[1])) {
          props.onChange(coord);
        }
      }}
      position={pos}
      positionOffset={{ x: -SQUARE_SIZE / 2, y: -SQUARE_SIZE / 2 }}
    >
      <div
        className='wrapper'
        style={{ width: SQUARE_SIZE, height: SQUARE_SIZE }}
        ref={nodeRef}
      >
        {props.children}
      </div>
    </Draggable>
  );
};

const toControlPosition = (coordinate: Coordinate) => {
  const x = coordinate[0] * SQUARE_SIZE - OFFSET.x;
  const y = (coordinate[1] - 7) * -SQUARE_SIZE - OFFSET.y;
  return { x, y };
};

const toCoordinate = (pos: ControlPosition) => {
  const x = Math.floor(pos.x / SQUARE_SIZE);
  const y = -(Math.floor(pos.y / SQUARE_SIZE) - 7);
  return [x, y] as Coordinate;
};
