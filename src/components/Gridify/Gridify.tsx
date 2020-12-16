import React, { useEffect, useState } from 'react';
import Draggable, { ControlPosition } from 'react-draggable';

import './Gridify.css';
import { BOARD_SIZE } from '../../config';

const SQUARE_SIZE = BOARD_SIZE / 8;
const OFFSET = { x: -SQUARE_SIZE / 2, y: -SQUARE_SIZE / 2 } as ControlPosition;

export type Coordinate = [x: number, y: number];

export interface GridifyProps {
  coordinate: Coordinate;
  moves: Coordinate[];
  onChange: (move: Coordinate) => void;
}

const Gridify: React.FC<GridifyProps> = ({
  children,
  coordinate,
  moves,
  onChange,
}) => {
  const [pos, setPos] = useState(toControlPosition(coordinate));
  const nodeRef = React.useRef(null);

  useEffect(() => {
    const newPos = toControlPosition(coordinate);
    setPos(newPos);
  }, [coordinate]);

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
        if (moves.some((m) => m[0] === coord[0] && m[1] === coord[1])) {
          onChange(coord);
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
        {children}
      </div>
    </Draggable>
  );
};
export default Gridify;

const gridify = (pos: ControlPosition) =>
  ({
    x: SQUARE_SIZE * Math.floor(pos.x / SQUARE_SIZE) - OFFSET.x,
    y: SQUARE_SIZE * Math.floor(pos.y / SQUARE_SIZE) - OFFSET.y,
  } as ControlPosition);

const toControlPosition = (coordinate: Coordinate) => {
  const x = coordinate[0] * SQUARE_SIZE;
  const y = (coordinate[1] - 7) * -SQUARE_SIZE;
  return gridify({ x, y });
};

const toCoordinate = (pos: ControlPosition) => {
  const x = Math.floor(pos.x / SQUARE_SIZE);
  const y = -(Math.floor(pos.y / SQUARE_SIZE) - 7);
  return [x, y] as Coordinate;
};
