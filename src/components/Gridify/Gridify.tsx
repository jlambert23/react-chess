import React, { useEffect, useState } from 'react';
import Draggable, { ControlPosition } from 'react-draggable';

import './Gridify.css';
import { BOARD_SIZE } from '../../config';
import notation from '../../notation';

const SQUARE_SIZE = BOARD_SIZE / 8;
const OFFSET = { x: -SQUARE_SIZE / 2, y: -SQUARE_SIZE / 2 } as ControlPosition;

export interface GridifyProps {
  place: notation;
  moves: notation[];
  onChange: (move: notation) => any;
}

const Gridify: React.FC<GridifyProps> = ({
  children,
  moves,
  onChange,
  place,
}) => {
  const [pos, setPos] = useState(toControlPosition(place));
  const nodeRef = React.useRef(null);

  useEffect(() => {
    const newPos = toControlPosition(place);
    setPos(newPos);
  }, [place]);

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
        const newPosNotation = toNotation(newPos);
        if (moves.includes(newPosNotation)) {
          onChange(newPosNotation);
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

const toControlPosition = (place: notation) => {
  const x = (place.charCodeAt(0) - 97) * SQUARE_SIZE;
  const y = (+place[1] - 8) * -SQUARE_SIZE;
  return gridify({ x, y });
};

const toNotation = (pos: ControlPosition) => {
  const x = Math.floor(pos.x / SQUARE_SIZE);
  const y = Math.floor(pos.y / SQUARE_SIZE);
  return `${String.fromCharCode(x + 97)}${(y - 8) * -1}` as notation;
};
