import { PieceProps } from '../components/Piece/Piece';

export const getInitPieces = () =>
  [
    {
      pieceType: 'R',
      color: 'white',
      coordinate: [0, 0],
      moves: [],
    },
    {
      pieceType: 'N',
      color: 'white',
      coordinate: [1, 0],
      moves: [
        [0, 2],
        [2, 2],
      ],
    },
    {
      pieceType: 'B',
      color: 'white',
      coordinate: [2, 0],
      moves: [],
    },
    {
      pieceType: 'Q',
      color: 'white',
      coordinate: [3, 0],
      moves: [],
    },
    {
      pieceType: 'K',
      color: 'white',
      coordinate: [4, 0],
      moves: [],
    },
    {
      pieceType: 'B',
      color: 'white',
      coordinate: [5, 0],
      moves: [],
    },
    {
      pieceType: 'N',
      color: 'white',
      coordinate: [6, 0],
      moves: [
        [5, 2],
        [7, 2],
      ],
    },
    {
      pieceType: 'R',
      color: 'white',
      coordinate: [7, 0],
      moves: [],
    },
    {
      pieceType: 'P',
      color: 'white',
      coordinate: [0, 1],
      moves: [
        [0, 2],
        [0, 3],
      ],
    },
    {
      pieceType: 'P',
      color: 'white',
      coordinate: [1, 1],
      moves: [
        [1, 2],
        [1, 3],
      ],
    },
    {
      pieceType: 'P',
      color: 'white',
      coordinate: [2, 1],
      moves: [
        [2, 2],
        [2, 3],
      ],
    },
    {
      pieceType: 'P',
      color: 'white',
      coordinate: [3, 1],
      moves: [
        [3, 2],
        [3, 3],
      ],
    },
    {
      pieceType: 'P',
      color: 'white',
      coordinate: [4, 1],
      moves: [
        [4, 2],
        [4, 3],
      ],
    },
    {
      pieceType: 'P',
      color: 'white',
      coordinate: [5, 1],
      moves: [
        [5, 2],
        [5, 3],
      ],
    },
    {
      pieceType: 'P',
      color: 'white',
      coordinate: [6, 1],
      moves: [
        [6, 2],
        [6, 3],
      ],
    },
    {
      pieceType: 'P',
      color: 'white',
      coordinate: [7, 1],
      moves: [
        [7, 2],
        [7, 3],
      ],
    },
    {
      pieceType: 'P',
      color: 'black',
      coordinate: [0, 6],
      moves: [
        [0, 5],
        [0, 4],
      ],
    },
    {
      pieceType: 'P',
      color: 'black',
      coordinate: [1, 6],
      moves: [
        [1, 5],
        [1, 4],
      ],
    },
    {
      pieceType: 'P',
      color: 'black',
      coordinate: [2, 6],
      moves: [
        [2, 5],
        [2, 4],
      ],
    },
    {
      pieceType: 'P',
      color: 'black',
      coordinate: [3, 6],
      moves: [
        [3, 5],
        [3, 4],
      ],
    },
    {
      pieceType: 'P',
      color: 'black',
      coordinate: [4, 6],
      moves: [
        [4, 5],
        [4, 4],
      ],
    },
    {
      pieceType: 'P',
      color: 'black',
      coordinate: [5, 6],
      moves: [
        [5, 5],
        [5, 4],
      ],
    },
    {
      pieceType: 'P',
      color: 'black',
      coordinate: [6, 6],
      moves: [
        [6, 5],
        [6, 4],
      ],
    },
    {
      pieceType: 'P',
      color: 'black',
      coordinate: [7, 6],
      moves: [
        [7, 5],
        [7, 4],
      ],
    },
    {
      pieceType: 'R',
      color: 'black',
      coordinate: [0, 7],
      moves: [],
    },
    {
      pieceType: 'N',
      color: 'black',
      coordinate: [1, 7],
      moves: [
        [0, 5],
        [2, 5],
      ],
    },
    {
      pieceType: 'B',
      color: 'black',
      coordinate: [2, 7],
      moves: [],
    },
    {
      pieceType: 'Q',
      color: 'black',
      coordinate: [3, 7],
      moves: [],
    },
    {
      pieceType: 'K',
      color: 'black',
      coordinate: [4, 7],
      moves: [],
    },
    {
      pieceType: 'B',
      color: 'black',
      coordinate: [5, 7],
      moves: [],
    },
    {
      pieceType: 'N',
      color: 'black',
      coordinate: [6, 7],
      moves: [
        [5, 5],
        [7, 5],
      ],
    },
    {
      pieceType: 'R',
      color: 'black',
      coordinate: [7, 7],
      moves: [],
    },
  ] as PieceProps[];
